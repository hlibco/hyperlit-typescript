import { app } from "hyperapp";
import html from "hyperlit";

const Home = () => html`<h1>WELCOME</h1>`;

app({
  init: {},
  view: Home,
  subscriptions: () => [],
  node: document.getElementById("app"),
});
