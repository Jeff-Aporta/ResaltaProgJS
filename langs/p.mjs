xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

export default extractGroups;

export { Resaltados };

xxxxxxx



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function extractGroups({ input, transform }) {

  if (!input) {

    return ╮╮;

  }


  const open = ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕;

  const close = [╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮, ╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮];

  const regex = new RegExp(

    ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

    ╮╮╮

  );



  {

    input = input.replaceAll(╮╮╮╮, ╮╮╮╮).replace(⼕⼕⼕⼕⼕⼕⼕, ╮╮╮╮);



    input = input

      .split(╮╮╮╮)

      .map((line) => {

        if (!line.trim().length) {

          return ╮╮╮;

        }

        return line;

      })

      .join(╮╮╮╮);



    input = ResaltaProg({

      string: input,

      model: {

        rules: [

          {

            regex: new RegExp(⼕⼕⼕⼕⼕⼕⼕.source + open.source, ╮╮╮),

            apply: function (frag) {

              let r = frag.substr;

              let structure = r.match(open)[0];

              structure = structure.replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮).replace(╮╮╮╮, ╮╮);

              structure = eval(⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽);

              if (structure.type == ╮╮╮╮╮╮) {

                return r.trim();

              }

              return r;

            },

          },

        ],

      },

    });



    [╮╮╮╮╮╮╮, ╮╮╮╮╮, ╮╮╮╮, ╮╮╮╮╮╮, ╮╮╮╮╮╮╮╮╮, ╮╮╮╮╮╮╮╮, ╮╮╮╮╮╮, ╮╮╮╮╮╮╮╮╮]

      .map((cmd) => {

        const regexgeneric =

          ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕;

        const regex = RegExp(⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽, ╮╮╮);

        return {

          regex,

          apply: function (frag) {

            let r = frag.substr;

            let structure = r.match(open)[0];

            structure = structure.replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮).replace(╮╮╮╮, ╮╮);

            structure = eval(⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽);

            if (structure.type == ╮╮╮╮╮╮) {

              return r;

            }

            r = r.replace(╮╮╮╮╮╮, ╮╮╮╮╮╮╮);

            r = replaceLastOccurrence(

              r,

              ╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮,

              ╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮

            );

            return r;

          },

        };

      })

      .forEach((rule) => {

        input = ResaltaProg({

          string: input,

          model: {

            rules: [rule],

          },

        });

      });



    input = input

      .replace(

        ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕,

        ╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮

      )

      .replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮)

      .replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮╮╮╮╮╮╮╮╮╮╮╮╮)

      .replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮╮╮╮╮╮╮╮╮╮╮╮╮);

  }


  let lines = 0;



  const stack = [];

  let results = [];

  let match;

  let lastIndex = 0;



  while ((match = regex.exec(input)) !== null) {

    const isStart = checkIfOpenAgr(match[0]);

    const isEnd = close.find((e) => e == match[0]);

    if (isStart) {

      if (stack.length == 0) {

        results.push(input.substring(lastIndex, match.index));

        lastIndex = match.index;

      }

      stack.push(match.index);

    } else if (isEnd && stack.length > 0) {

      const start = stack.pop();

      if (stack.length == 0) {

        results.push(input.substring(start, match.index + isEnd.length));

      }

      lastIndex = match.index + isEnd.length;

    }

  }


  if (lastIndex < input.length) {

    results.push(input.substring(lastIndex));

  }


  if (!results.length) {

    const string = transform(clean({ string: input }));

    return {

      string,

      lines: string.split(╮╮╮╮).length,

    };

  }


  results = results.map((string) => {

    const isCollapsableBlock = checkIfOpenAgr(string);



    if (!isCollapsableBlock) {

      lines += string.trim().split(╮╮╮╮).length;

      return transform(string);

    }


    const m = string.match(open);

    let structure = (() => {

      return m[0].replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮).replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮╮);

    })();



    structure = eval(⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽);



    let codeCollapse = string.replace(open, ╮╮);

    const c = close.find((c) => codeCollapse.endsWith(c));

    if (c) {

      codeCollapse = codeCollapse.substring(0, codeCollapse.length - c.length);

    }

    codeCollapse = clean({ string: codeCollapse });



    codeCollapse = extractGroups({

      input: codeCollapse,

      transform,

    });



    lines += codeCollapse.lines;



    const idC = Math.random().toString(36).replace(╮╮╮╮, ╮╮╮╮╮╮╮╮╮╮╮╮);

    const idR = Math.random().toString(36).replace(╮╮╮╮, ╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮╮);

    const title = structure.name ?? ╮╮╮╮╮╮╮╮;

    const type = structure.type ?? ╮╮╮╮╮╮╮╮╮╮╮╮╮;

    const block = structure.block ?? true ? ╮╮╮╮╮╮╮ : ╮╮;

    let hue = structure.huerotate;

    if (hue) {

      hue = ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽;

    } else {

      hue = ╮╮;

    }

    const clsMultiline = codeCollapse.lines > 1 ? ╮╮╮╮╮╮╮╮╮╮╮ : ╮╮;



    let retorno = [

      ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

      ...bloqueType(),

      ⍽⍽⍽⍽⍽⍽⍽⍽,

    ].join(╮╮);



    return retorno;



    function bloqueType() {

      switch (type) {

        case ╮╮╮╮╮╮╮╮╮╮╮╮╮:

          return bloqueCollapsable();

        case ╮╮╮╮╮╮:

          return bloqueNote();

        case ╮╮╮╮╮╮╮:

          return bloqueTitle();

        case ╮╮╮╮╮╮╮╮╮:

          return bloqueNoCode();

      }


      function bloqueTitle() {

        structure.separadorSuperior = false;

        structure.separadorInferior = false;

        return [

          ...auxNoCode(),

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

        ];

      }


      function bloqueNoCode() {

        return auxNoCode();

      }


      function auxNoCode() {

        const note = document.createElement(╮╮╮);

        note.classList.add(╮╮╮╮╮╮╮╮╮╮╮╮╮╮);

        note.innerHTML = structure.content;

        return [

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ...(() => {

            if (structure.separadorSuperior === false) {

              return [];

            }

            return [⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽];

          })(),

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽,

          note.outerHTML,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ...(() => {

            if (structure.separadorInferior === false) {

              return [];

            }

            return [⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽];

          })(),

          ⍽⍽⍽⍽⍽⍽⍽⍽,

        ];

      }


      function bloqueNote() {

        const note = document.createElement(╮╮╮);

        note.classList.add(╮╮╮╮╮╮╮╮╮╮╮);

        note.innerHTML = structure.content;

        return [

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽,

          note.outerHTML,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

        ];

      }


      function bloqueCollapsable() {

        return [

          ...herramientasDeBloque(),

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          codeCollapse.string,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          ⍽⍽⍽⍽⍽⍽⍽⍽,

        ];

      }

    }


    function herramientasDeBloque() {

      return [

        ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

        ...[

          ...titulo(),

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ...colapsadores(),

          ...botonDeInformacion(),

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

        ],

        ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

      ];



      function titulo() {

        return [

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ...[⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽],

          ⍽⍽⍽⍽⍽⍽⍽⍽,

        ];

      }


      function colapsadores() {

        return [

          ...[

            ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

            ⍽⍽⍽⍽⍽,

            ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ],

          ...[

            ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

            ⍽⍽⍽⍽⍽,

            ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ],

        ];

      }


      function botonDeInformacion() {

        if (!structure.content) {

          return [];

        }

        return [

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ...icono(),

          ...transformadoresDePosicionDeContenido(),

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

        ];



        function icono() {

          return [⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽⍽⍽];

        }


        function transformadoresDePosicionDeContenido() {

          return [

            ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

            ...[

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ...[

                ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

                ...[⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽, ...contenido(), ⍽⍽⍽⍽⍽⍽⍽⍽],

                ⍽⍽⍽⍽⍽⍽⍽⍽,

              ],

              ⍽⍽⍽⍽⍽⍽⍽⍽,

            ],

            ⍽⍽⍽⍽⍽⍽⍽⍽,

          ];



          function contenido() {

            return [

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

              ⍽⍽⍽⍽⍽⍽⍽⍽,

            ];

          }

        }

      }

    }

  });



  const string = results.join(╮╮);



  return {

    string,

    lines,

  };



  function checkIfOpenAgr(str) {

    return [╮╮╮╮╮╮╮╮╮╮╮╮╮, ╮╮╮╮╮╮╮╮╮╮╮╮╮╮].some((s) => str.includes(s));

  }


  function clean({ string }) {

    let retorno = string;

    retorno = trimLines(retorno);

    return retorno;



    function trimLines(str) {

      const lines = str.split(╮╮╮╮);

      const left = [];

      const right = [];

      let first = false;

      let last = false;

      while (lines.length) {

        const l = lines.shift();

        const r = lines.pop();

        first ||= l.trim();

        last ||= r?.trim();

        if (first) {

          left.push(l);

        }

        if (last) {

          right.push(r);

        }

      }

      let retorno = [left.join(╮╮╮╮), right.reverse().join(╮╮╮╮)]

        .filter(Boolean)

        .join(╮╮╮╮);

      return retorno;

    }

  }

}


function Resaltados() {

  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  return {

    rules: [

      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

      {

        regex: ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕,

        apply: function (frag) {

          const clase = ╮╮╮╮╮╮╮╮╮╮╮╮╮╮;

          return ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽;

        },

      },



      {

        regex: ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕,

        apply: function (frag) {

          const clase = ╮╮╮╮╮╮╮╮╮╮╮╮╮;

          return ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽;

        },

      },



      {

        regex: ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕,

        apply: function (frag) {

          const clase = ╮╮╮╮╮╮╮╮╮╮╮╮╮;

          return ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽;

        },

      },

      {

        regex: ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕,

        apply: function (frag) {

          return ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽;

        },

      },

      xxxxxxx

      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

      {

        regex: ⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕,

        apply: function (frag) {

          return globo(frag);

        },

      },

      xxxxxxx

    ],

  };

  xxxxxxx



  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  function globo(frag, fin = [╮╮╮╮]) {

    const clase = ╮╮╮╮╮╮╮╮;

    frag.substr = frag.substr.replace(⼕⼕⼕⼕⼕⼕⼕⼕⼕⼕, ╮╮╮);

    const noL = frag.substr.startsWith(╮╮╮╮╮╮╮╮);

    const nFrag = frag.substr.replace(╮╮╮╮╮╮╮ + (noL ? ╮╮╮ : ╮╮), ╮╮);

    return [

      ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

      ...[

        ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        ...[

          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ...[

            ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

            noL ? ╮╮╮╮╮╮╮╮╮╮╮╮╮╮ : ╮╮╮╮,

            ⍽⍽⍽⍽⍽⍽⍽⍽,

          ],

          xxxxxxx

          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ⍽⍽⍽⍽,

          xxxxxxx

          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ...[⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽⍽],

          xxxxxxx

        ],

        xxxxxxx

        ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

        ...[

          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ...[⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽, nFrag, ⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽], xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          xxxxxxx

          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽⍽,

          ...[⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽, nFrag, ⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽, ⍽⍽⍽⍽⍽⍽⍽], xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

          ⍽⍽⍽⍽⍽⍽⍽⍽,

          xxxxxxx

        ],

      ],

      ⍽⍽⍽⍽⍽⍽⍽⍽⍽,

      ...fin,

    ].join(╮╮);

  }

  xxxxxxx

  xxxxxxx

}

xxxxxxx



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function BlockcmdCollapser_collapse(id) {

  const node = document.querySelector(⍽⍽⍽⍽⍽⍽⍽⍽);

  [...node.querySelectorAll(╮╮╮╮╮╮╮)].forEach((input) => {

    input.checked = false;

  });

}


function BlockcmdCollapser_uncollapse(id) {

  const node = document.querySelector(⍽⍽⍽⍽⍽⍽⍽⍽);

  [...node.querySelectorAll(╮╮╮╮╮╮╮)].forEach((input) => {

    input.checked = true;

  });

}

xxxxxxx

xxxxxxx



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Object.assign(window, {

  BlockcmdCollapser_collapse,

  BlockcmdCollapser_uncollapse,

});

xxxxxxx

xxxxxxx

