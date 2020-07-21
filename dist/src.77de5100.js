// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/hyperapp/hyperapp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.h = exports.text = exports.memo = void 0;

var e = {},
    n = [],
    r = e => e,
    t = n.map,
    l = Array.isArray,
    o = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout,
    i = e => {
  var n = "";
  if ("string" == typeof e) return e;
  if (l(e)) for (var r, t = 0; t < e.length; t++) (r = i(e[t])) && (n += (n && " ") + r);else for (var t in e) e[t] && (n += (n && " ") + t);
  return n;
},
    a = (e, n) => {
  for (var r in { ...e,
    ...n
  }) if ("function" == typeof (l(n[r] = e[r]) ? n[r][0] : n[r])) ;else if (e[r] !== n[r]) return !0;
},
    u = e => null == e ? e : e.key,
    d = (e, n, r, t, l, o) => {
  if ("key" === n) ;else if ("style" === n) for (var a in { ...r,
    ...t
  }) r = null == t || null == t[a] ? "" : t[a], "-" === a[0] ? e[n].setProperty(a, r) : e[n][a] = r;else "o" === n[0] && "n" === n[1] ? ((e.tag || (e.tag = {}))[n = n.slice(2)] = t) ? r || e.addEventListener(n, l) : e.removeEventListener(n, l) : !o && "list" !== n && "form" !== n && n in e ? e[n] = null == t ? "" : t : null == t || !1 === t || "class" === n && !(t = i(t)) ? e.removeAttribute(n) : e.setAttribute(n, t);
},
    f = (e, n, r) => {
  var t = e.props,
      l = 3 === e.tag ? document.createTextNode(e.type) : (r = r || "svg" === e.type) ? document.createElementNS("http://www.w3.org/2000/svg", e.type, {
    is: t.is
  }) : document.createElement(e.type, {
    is: t.is
  });

  for (var o in t) d(l, o, null, t[o], n, r);

  for (var i = 0; i < e.children.length; i++) l.appendChild(f(e.children[i] = p(e.children[i]), n, r));

  return e.node = l;
},
    s = (e, n, r, t, l, o) => {
  if (r === t) ;else if (null != r && 3 === r.tag && 3 === t.tag) r.type !== t.type && (n.nodeValue = t.type);else if (null == r || r.type !== t.type) n = e.insertBefore(f(t = p(t), l, o), n), null != r && e.removeChild(r.node);else {
    var i,
        a,
        m,
        v,
        y = r.props,
        c = t.props,
        h = r.children,
        g = t.children,
        x = 0,
        w = 0,
        C = h.length - 1,
        k = g.length - 1;

    for (var A in o = o || "svg" === t.type, { ...y,
      ...c
    }) ("value" === A || "selected" === A || "checked" === A ? n[A] : y[A]) !== c[A] && d(n, A, y[A], c[A], l, o);

    for (; w <= k && x <= C && null != (m = u(h[x])) && m === u(g[w]);) s(n, h[x].node, h[x], g[w] = p(g[w++], h[x++]), l, o);

    for (; w <= k && x <= C && null != (m = u(h[C])) && m === u(g[k]);) s(n, h[C].node, h[C], g[k] = p(g[k--], h[C--]), l, o);

    if (x > C) for (; w <= k;) n.insertBefore(f(g[w] = p(g[w++]), l, o), (a = h[x]) && a.node);else if (w > k) for (; x <= C;) n.removeChild(h[x++].node);else {
      var N = {},
          E = {};

      for (A = x; A <= C; A++) null != (m = h[A].key) && (N[m] = h[A]);

      for (; w <= k;) m = u(a = h[x]), v = u(g[w] = p(g[w], a)), E[m] || null != v && v === u(h[x + 1]) ? (null == m && n.removeChild(a.node), x++) : null == v || 1 === r.tag ? (null == m && (s(n, a && a.node, a, g[w], l, o), w++), x++) : (m === v ? (s(n, a.node, a, g[w], l, o), E[v] = !0, x++) : null != (i = N[v]) ? (s(n, n.insertBefore(i.node, a && a.node), i, g[w], l, o), E[v] = !0) : s(n, a && a.node, null, g[w], l, o), w++);

      for (; x <= C;) null == u(a = h[x++]) && n.removeChild(a.node);

      for (var A in N) null == E[A] && n.removeChild(N[A].node);
    }
  }
  return t.node = n;
},
    p = (e, n) => !0 !== e && !1 !== e && e ? "function" == typeof e.tag ? ((!n || null == n.memo || ((e, n) => {
  for (var r in e) if (e[r] !== n[r]) return !0;

  for (var r in n) if (e[r] !== n[r]) return !0;
})(n.memo, e.memo)) && ((n = e.tag(e.memo)).memo = e.memo), n) : e : text(""),
    m = n => 3 === n.nodeType ? text(n.nodeValue, n) : v(n.nodeName.toLowerCase(), e, t.call(n.childNodes, m), n, null, 1),
    v = (e, n, r, t, l, o) => ({
  type: e,
  props: n,
  children: r,
  node: t,
  key: l,
  tag: o
});

var memo = (e, n) => ({
  tag: e,
  memo: n
});

exports.memo = memo;

var text = (r, t) => v(r, e, n, t, null, 3);

exports.text = text;

var h = (e, r, t) => v(e, r, l(t) ? t : null == t ? n : [t], null, r.key);

exports.h = h;

var app = e => {
  var n,
      t,
      i = e.view,
      u = e.node,
      d = e.subscriptions,
      f = u && m(u),
      p = [],
      v = e => {
    t !== e && (t = e, d && (p = ((e, n, r) => {
      for (var t, l, o = [], i = 0; i < e.length || i < n.length; i++) t = e[i], l = n[i], o.push(l && !0 !== l ? !t || l[0] !== t[0] || a(l[1], t[1]) ? [l[0], l[1], l[0](r, l[1]), t && t[2]()] : t : t && t[2]());

      return o;
    })(p, d(t), y)), i && !n && o(h, n = !0));
  },
      y = (e.middleware || r)((e, n) => "function" == typeof e ? y(e(t, n)) : l(e) ? "function" == typeof e[0] ? y(e[0], e[1]) : e.slice(1).map(e => e && !0 !== e && e[0](y, e[1]), v(e[0])) : v(e)),
      c = function (e) {
    y(this.tag[e.type], e);
  },
      h = () => u = s(u.parentNode, u, f, f = i(t), c, n = !1);

  y(e.init);
};

exports.app = app;
},{}],"../node_modules/babel-plugin-hyperlit/html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hyperapp = require("hyperapp");

var _default = (tag, props = {}, children = []) => {
  children = children.flat().filter(x => x || x === 0).map(ch => typeof ch == 'string' ? (0, _hyperapp.text)(ch) : typeof ch == 'number' ? (0, _hyperapp.text)('' + ch) : ch);
  if (typeof tag === 'function') return tag(props, children);
  return (0, _hyperapp.h)(tag, props, children);
};

exports.default = _default;
},{"hyperapp":"../node_modules/hyperapp/hyperapp.js"}],"index.ts":[function(require,module,exports) {
"use strict";

var _hyperapp = require("hyperapp");

var _html = _interopRequireDefault(require("babel-plugin-hyperlit/html.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return (0, _html.default)("h1", {}, ["WELCOME"]);
};

(0, _hyperapp.app)({
  init: {},
  view: Home,
  subscriptions: function subscriptions() {
    return [];
  },
  node: document.getElementById("app")
});
},{"hyperapp":"../node_modules/hyperapp/hyperapp.js","babel-plugin-hyperlit/html.js":"../node_modules/babel-plugin-hyperlit/html.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53429" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map