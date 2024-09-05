/*:->{"type": "no-code", "name": "Modulo Principal para Resaltar Programación", 
"huerotate": 7, 
logo: `/src/img/logo.jpeg`,
"content": `
    <p>
    Este módulo maneja los diferentes módulos que resaltan la sintaxis de los lenguajes de programación.
    <p>Procesa el protocolo general para cualquier lenguaje.
    <p align="right"><br/>
    <b>Autor</b>: Jeffrey Agudelo (<a href="https://github.com/Jeff-Aporta" target="_blank">Jeff-Aporta</a>)
  `}*/
/*<-:*/

import { default as lang_js } from "./src/app/langs/js.mjs";
import { default as cmds } from "./src/app/langs/cmds.mjs";

window["ResaltaProg"] = ResaltaProg;
window["ResaltaProgEXEC"] = ResaltaProgEXEC;
window["replaceLastOccurrence"] = replaceLastOccurrence;

const classMain = "ResaltaProg";
const lenguajes = [lang_js];
const tabspaces = 4;

setTimeout(ResaltaProgEXEC);

function replaceLastOccurrence(str, search, replacement) {
  const lastIndex = str.lastIndexOf(search);
  if (lastIndex === -1) {
    return str;
  }
  return (
    str.slice(0, lastIndex) + replacement + str.slice(lastIndex + search.length)
  );
}

function ResaltaProgEXEC() {
  document.querySelectorAll(`.${classMain}`).forEach(async (block) => {
    const lng = [...block.classList]
      .find((c) => c.startsWith("lang-"))
      .replace("lang-", "");

    if (!lng) {
      return;
    }

    const autocollapse = block.classList.contains("autocollapse");

    let contenido = await (async () => {
      const url = block.dataset.ref;
      if (!url) {
        return block.innerText;
      }
      try {
        var text = await (await fetch(url)).text();
        return text;
      } catch (e) {
        return;
      }
    })();

    const model = (() => {
      return lenguajes.find((l) => {
        if (typeof l.name == "string") {
          return l.name == lng;
        }
        return l.name.includes(lng);
      });
    })();

    if (model.preparar) {
      contenido = model.preparar({ string: contenido, tabspaces, autocollapse });
    }

    contenido = cmds({
      input: contenido,
      transform: (str) => {
        return ResaltaProg({ string: str, model });
      },
    });

    block.innerHTML = contenido.string;
  });
}

function ResaltaProg({ string, model, tabspaces = 4, mask }) {
  if (!mask && model.mask) {
    mask = model.mask(string);
  }
  if (Array.isArray(string)) {
    return string.map((s) => {
      return ResaltaProg({ string: s, model, tabspaces, mask });
    });
  }

  const frg = fragmentar({ string, mask });

  if (typeof frg == "string") {
    return frg;
  }

  return frg
    .map((f) => {
      if (typeof f == "string") {
        return f;
      }
      return f.rule.apply(f);
    })
    .join("");

  function fragmentar({ string, mask }) {
    if (typeof string != "string" || !string.trim()) {
      return string;
    }
    for (let rule of model.rules) {
      if (!rule.regex && !rule.regexmask) {
        continue;
      }
      let r = rule.regexmask && mask ? rule.regexmask : rule.regex;
      if (!Array.isArray(r)) {
        r = [r];
      }
      for (const regex of r) {
        const match = Array.from(
          (rule.regexmask && mask ? mask : string).matchAll(regex)
        )[0];

        if (match) {
          const start = match.index;
          const end = start + match[0].length;
          const [substr, submsk] = [string, mask]
            .filter(Boolean)
            .map((s) => s.substring(start, end));
          const [substrstart, submskstart] = [string, mask]
            .filter(Boolean)
            .map((s) => s.substring(0, start));
          const [substrend, submskend] = [string, mask]
            .filter(Boolean)
            .map((s) => s.substring(end));

          const fragsubstrstart = fragmentar({
            string: substrstart,
            mask: submskstart,
          });
          const fragsubstrend = fragmentar({
            string: substrend,
            mask: submskend,
          });

          return [
            ...(() => {
              if (typeof fragsubstrstart == "string") {
                return [fragsubstrstart];
              }
              return fragsubstrstart;
            })(),
            {
              rule,
              substr,
              submsk,
              start,
              end,
              strparent: string,
            },
            ...(() => {
              if (typeof fragsubstrend == "string") {
                return [fragsubstrend];
              }
              return fragsubstrend;
            })(),
          ];
        }
      }
    }
    return string;
  }
}
