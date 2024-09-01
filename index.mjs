const classExec = "ResaltaProg";

window["ResaltaProg"] = ResaltaProg;

import { default as lang_js } from "./langs/js.mjs";
import { default as cmds } from "./langs/cmds.mjs";

const lenguajes = [lang_js];
const tabspaces = 4;

window["ResaltaProgEXEC"] = ResaltaProgEXEC;
window["replaceLastOccurrence"] = replaceLastOccurrence;

setTimeout(ResaltaProgEXEC);

function loadTextFileSync(filePath) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", filePath, false); // false para sincrónico
  xhr.send(null);

  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    throw new Error("No se pudo cargar el archivo: " + xhr.status);
  }
}

function replaceLastOccurrence(str, search, replacement) {
  const lastIndex = str.lastIndexOf(search);
  if (lastIndex === -1) {
    return str; // No se encontró la coincidencia
  }
  return (
    str.slice(0, lastIndex) + replacement + str.slice(lastIndex + search.length)
  );
}

function load(url) {
  try {
    var text = loadTextFileSync(url);
    return text;
  } catch (e) {
    return;
  }
}

function ResaltaProgEXEC() {
  document.querySelectorAll(`.${classExec}`).forEach((block) => {
    const lng = [...block.classList]
      .find((c) => c.startsWith("lang-"))
      .replace("lang-", "");

    const untab = block.classList.contains("untab");
    const removeDoubleLineblank = block.classList.contains("no2r-blanks");

    let contenido = load(block.dataset.ref) ?? block.innerText;

    if (untab) {
      // contenido = unTab(contenido);
    }
    if (removeDoubleLineblank) {
      // contenido = RemoveDoubleLineblank(contenido);
    }

    const model = (() => {
      return lenguajes.find((l) => {
        if (typeof l.name == "string") {
          return l.name == lng;
        }
        return l.name.includes(lng);
      });
    })();

    if (model.preparar) {
      contenido = model.preparar({ string: contenido, tabspaces });
    }

    const mask = model.mask ? model.mask(contenido) : string;

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
