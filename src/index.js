import App from "./App.jsx";

window.addEventListener("WebComponentsReady", () => {
  const el = document.getElementsByTagName("my-app")[0];
  React.render(<App element={ el } />, el);
});
