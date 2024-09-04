const _RESALTA_PROG_ = new GenerarContenidoLibreria({
  nombre: "Resalta Prog JS",
  slogan: "Sintax-highlighter, resalta y documenta código",
  img: "src/img/logo.jpeg",

  github: "https://github.com/Jeff-Aporta/ResaltaProgJS",

  resumen: {
    desc: `
            *Resalta Prog JS* es una librería que permite resaltar la sintaxis de un código fuente,
            además de ayudar a documentar el código.
        `,
    descImg: [
      "Permite de forma sencilla actualizar el resaltado texto de elementos ejecutando una función",
      "Añade herramientas de documentación para mostrar información de manera ordenada y compacta",
      "Personaliza desde CSS los colores y estilos de los elementos",
    ],
  },

  secciones: [
    {
      nombre: "Introducción",
      contenido: (thisObj) => {},
    },
    {
      nombre: "Play Code",
      contenido: (thisObj) => {
        return (
          <FormatoDoc>
            <h2>Prueba en línea</h2>
            <br />
            Inserta texto de código y observa el resultado.
            <br />
            <br />
            <Button
              variant="contained"
              startIcon={<i className="fas fa-play"></i>}
            >
              Procesar texto
            </Button>
            <br />
            <br />
            Por medio de una URL puedes procesar el texto del código.
            <br />
            <br />
            <Button
              variant="contained"
              startIcon={<i className="fas fa-play"></i>}
            >
              Procesar URL
            </Button>
          </FormatoDoc>
        );
      },
    },
  ],
});
