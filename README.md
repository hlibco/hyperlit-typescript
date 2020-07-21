## Hyperapp Sample

This is a `Hyperapp` sample written in `Typescript` that uses `Parcel` as a module bundler, `Hyperlit` as a template engine and `babel-plugin-hyperlit`.

### Motivation

The whole mix of Hyperapp, Hyperlit, Typescript and Parcel work as expected. However, if you decide to use `babel-plugin-hyperlit` to reduce some of the overhead in runtime and bring it to build time, there's a chance you encounter problems.

The ultimate configuration that I found useful was to update the `tsconfig.json` to use `"module": "esnext"` or `"module": "ES2015"`. However, if this doesn't work for you, I suggest digging into this very small repo and analyzing the `.babel.rs`, `package.json`, `tsconfig.json` and `src/index.ts`.

### Source Code

The entire Typescript code of the `src/index.ts` is shown below:

```js
import { app } from "hyperapp";
import html from "hyperlit";

const Home = () => html`<h1>WELCOME</h1>`;

app({
  init: {},
  view: Home,
  subscriptions: () => [],
  node: document.getElementById("app"),
});
```

### Notes

Please, note that the `dist` folder is included in this repo to show how `babel-plugin-hyperlit` is transforming the view component in the .js file.
