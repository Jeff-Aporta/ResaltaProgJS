const execAppPrev = Boolean(
  new URLSearchParams(window.location.search).get("url")
);

if (execAppPrev) {
  appPrev();
} else {
  AppDoc();
}

function appPrev() {
  ReactDOM.render(<App />, document.querySelector("body"));
  setTimeout(ResaltaProgEXEC);
  document.body.scrollTop = 0;

  function App() {
    const urlParam = getParam({
      name: "url",
      required: { message: "URL del archivo" },
    });
    const autocollapse = (() => {
      const r =
        getParam({
          name: "autocollapse",
          def: true,
        }) == "true";
      return r ? "autocollapse" : "";
    })();
    const lng = (() => {
      const l = getParam({
        name: "lang",
        def: urlParam.split(".").pop(),
      });
      return `lang-${l}`;
    })();
    const nobg = (() => {
      const r =
        getParam({
          name: "nobg",
          def: false,
        }) == "true";
      return r ? "nobg" : "";
    })();
    const theme = getParam({
      name: "theme",
      def: "nightblue",
    });
    const retorno = (
      <div
        className={`ResaltaProg ${theme}`}
        style={{
          display: "block",
          minWidth: "calc(100vw - (100vw - 100%))",
          margin: 0,
          padding: 0,
        }}
      >
        {[
          "theme-nightblue",
          "theme-night",
          "theme-light",
          "collapsable",
          "note",
          "title",
          "prev",
          "no-code",
          "",
        ].map((css) => {
          const s = css ? "-" : "";
          return (
            <link
              key={css}
              rel="stylesheet"
              href={`/src/css/RP${s}${css}.css`}
            />
          );
        })}

        <style>{`
            html,body{
                margin: 0;
                padding: 0;
                background-color: transparent;
                min-height: 100vh;
            }
            pre{
                padding: 0 !important;
                margin: 0 !important;
                width: 98%;
                min-height: 100vh;
            }
            body {
                font-size: 14px;
                display: flex;
                flex-direction: column;
            }
        `}</style>
        <div
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            paddingLeft: "20px",
            paddingTop: "25px",
            color: "rgba(0,200,255,0.8)",
            textAlign: "center",
            width: "95%",
          }}
        >
          {urlParam}
        </div>
        <div style={{ padding: "10px 20px" }}>
          <pre
            className={`ResaltaProg ${lng} ${nobg} ${autocollapse} ${theme}`}
            data-ref={urlParam}
          />
        </div>
      </div>
    );
    return retorno;

    function getParam({ name, required, def }) {
      const urlParams = new URLSearchParams(window.location.search);
      let urlParam = urlParams.get(name) ?? def;
      if (required) {
        while (!urlParam) {
          urlParam = prompt(required.message);
        }
      }
      setURL();
      return urlParam;

      function setURL() {
        const url = new URL(window.location.href);
        url.searchParams.set(name, urlParam);
        window.history.pushState({}, "", url);
      }
    }
  }
}

function AppDoc() {
  ReactDOM.render(
    <div className="esquema-principal">
      <div className="contenedor-pagina">
        <EnvolventePagina>
          {esquemaGeneralLibreria(_RESALTA_PROG_)}
        </EnvolventePagina>
        <BotonLinkPortafolio />
      </div>
    </div>,
    document.querySelector("body")
  );
}
