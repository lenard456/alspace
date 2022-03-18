<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel + Vite App</title>
  </head>
  <body class="font-sans">
    <div id="root"></div>

    @if (env('VITE_ENV') == 'gitpod')
      <script type="module">
        import RefreshRuntime from "{{ env('VITE_SERVER_HOST') }}/@@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
      </script>

      <script type="module" src="{{ env('VITE_SERVER_HOST') }}/@@vite/client"></script>

      <script type="module" src="{{ env('VITE_SERVER_HOST') }}/resources/js/main.jsx"></script>
    @else
      @vite
    @endif

  </body>
</html>
