// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4rkIz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _firstTask = require("./js/first-task");
var _firstTaskDefault = parcelHelpers.interopDefault(_firstTask);
var _secondTask = require("./js/second-task");
var _secondTaskDefault = parcelHelpers.interopDefault(_secondTask);
var _thirdTask = require("./js/third-task");
var _thirdTaskDefault = parcelHelpers.interopDefault(_thirdTask);
var _fourthTask = require("./js/fourth-task");
var _fourthTaskDefault = parcelHelpers.interopDefault(_fourthTask);
var _fifthTask = require("./js/fifth-task");
var _fifthTaskDefault = parcelHelpers.interopDefault(_fifthTask);
// !1
(0, _firstTaskDefault.default)();
// !2
(0, _secondTaskDefault.default)();
// !3
(0, _thirdTaskDefault.default)();
// !4
(0, _fourthTaskDefault.default)();
// !5
(0, _fifthTaskDefault.default)();

},{"./js/first-task":"bs5nZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./js/second-task":"eIiNb","./js/third-task":"3QgDK","./js/fourth-task":"f4wNW","./js/fifth-task":"7on4F"}],"bs5nZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>firstTask);
const checkboxesRef = document.querySelectorAll(".checkbox");
function firstTask() {
    checkboxesRef.forEach((checkbox)=>{
        checkbox.checked = false;
        checkbox.addEventListener("click", ()=>{
            const checkboxId = checkbox.id;
            const isChecked = checkbox.checked;
            localStorage.setItem(`todo_list_${checkboxId}`, isChecked);
        });
    });
    document.addEventListener("DOMContentLoaded", ()=>{
        checkboxesRef.forEach((checkbox)=>{
            const checkboxId = checkbox.id;
            const checkboxValue = localStorage.getItem(`todo_list_${checkboxId}`);
            if (checkboxValue === "true") checkbox.checked = true;
            else checkbox.checked = false;
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eIiNb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>secondTask);
const formRef = document.querySelector(".form");
const nameInputRef = document.querySelector(".form-name__input");
const surnameInputRef = document.querySelector(".form-surname__input");
function secondTask() {
    formRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const formData = {
            name: evt.target.elements.userName.value,
            surname: evt.target.elements.surname.value
        };
        localStorage.setItem("User data", JSON.stringify(formData));
    });
    const localStorageData = JSON.parse(localStorage.getItem("User data"));
    if (localStorageData !== null && localStorageData !== undefined) {
        nameInputRef.value = localStorageData.name;
        surnameInputRef.value = localStorageData.surname;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QgDK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>thirdTask);
const loginFormRef = document.querySelector(".login__form");
function thirdTask() {
    loginFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const loginFormData = {
            login: evt.target.elements.login.value,
            password: evt.target.elements.password.value
        };
        const getLocalStorageData = localStorage.getItem("Login form data");
        if (!getLocalStorageData) {
            localStorage.setItem("Login form data", JSON.stringify(loginFormData));
            alert(`\u{412}\u{456}\u{442}\u{430}\u{44E}, ${loginFormData.login}, \u{412}\u{438} \u{437}\u{430}\u{440}\u{435}\u{454}\u{441}\u{442}\u{440}\u{443}\u{432}\u{430}\u{43B}\u{438}\u{441}\u{44F} \u{1F973}`);
        } else {
            const parseLocalStorageData = JSON.parse(getLocalStorageData);
            if (loginFormData.login === parseLocalStorageData.login && loginFormData.password === parseLocalStorageData.password) alert(`${parseLocalStorageData.login}, \u{412}\u{438} \u{432}\u{436}\u{435} \u{437}\u{430}\u{440}\u{435}\u{454}\u{441}\u{442}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{456} \u{1F942}`);
            else {
                localStorage.setItem("Login form data", JSON.stringify(loginFormData));
                alert(`\u{412}\u{456}\u{442}\u{430}\u{44E}, ${loginFormData.login}, \u{412}\u{438} \u{443}\u{441}\u{43F}\u{456}\u{448}\u{43D}\u{43E} \u{43E}\u{43D}\u{43E}\u{432}\u{438}\u{43B}\u{438} \u{434}\u{430}\u{43D}\u{456} \u{1F44F}`);
            }
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4wNW":[function(require,module,exports) {
// !add page refs
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>fourthTask);
const pagesFormRef = document.querySelector(".pages__form");
const pagesInputRef = document.querySelector(".pages__input");
const pagesListRef = document.querySelector(".pages__list");
const pagesOpenButtonRef = document.querySelector("[data-button=pagesOpen]");
const pagesBackdropRef = document.querySelector("[data-backdrop=pages]");
const pagesCloseButtonRef = document.querySelector("[data-button=pagesClose]");
const titleInputRef = document.querySelector("[data-input=pagesTitle]");
const linkInputRef = document.querySelector("[data-input=pagesLink]");
const sendPagesFormRef = document.querySelector("[data-button=sendPagesModal]");
// !
// !edit page refs
const openEditPagesButtonRef = document.querySelector("[data-button=pagesEdit]");
const closeEditPagesButtonRef = document.querySelector("[data-button=pagesCloseEdit]");
const editPagesFormRef = document.querySelector(".edit-pages__form");
const editPagesTitleRef = document.querySelector("[data-input=editPagesTitle]");
const editPagesLinkRef = document.querySelector('[data-input="editPagesLink"]');
const editBackdropRef = document.querySelector("[data-backdrop=pagesEdit]");
const editNumPageRef = document.querySelector('[data-input="numEditPage"]');
// !
// !delete page refs
const openDeletePageButtonRef = document.querySelector("[data-button=pagesDelete]");
const closeDeletePagesButtonRef = document.querySelector("[data-button=pagesCloseDelete]");
const deleteBackdropRef = document.querySelector("[data-backdrop=pagesDelete]");
const deletePagesFormRef = document.querySelector(".delete-pages__form");
const deleteNumPageRef = document.querySelector("[data-input=numDeletePage]");
// !
// !function open and close modal
function togglePagesModal() {
    pagesBackdropRef.classList.toggle("is-hidden");
}
function fourthTask() {
    pagesOpenButtonRef.addEventListener("click", togglePagesModal);
    pagesCloseButtonRef.addEventListener("click", togglePagesModal);
    // !add pages
    pagesFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        let pagesArr = [];
        const dataForm = {
            title: titleInputRef.value,
            link: linkInputRef.value
        };
        if (localStorage?.getItem("pagesList") || localStorage.getItem("pagesList")) pagesArr = JSON.parse(localStorage.getItem("pagesList"));
        pagesArr.push(dataForm);
        localStorage.setItem("pagesList", JSON.stringify(pagesArr));
        const currentIdx = pagesArr.length;
        pagesListRef.insertAdjacentHTML("beforeend", `<li>${currentIdx}. <a href=${linkInputRef.value}>${titleInputRef.value}</a></li>`);
        pagesBackdropRef.classList.add("is-hidden");
        pagesFormRef.reset();
    });
    document.addEventListener("DOMContentLoaded", ()=>{
        const pagesListData = JSON.parse(localStorage.getItem("pagesList"));
        // console.log(pagesListData);
        if (pagesListData) pagesListData.forEach((page, idx)=>{
            const currentIdx = idx + 1;
            pagesListRef.insertAdjacentHTML("beforeend", `<li>${currentIdx}. <a href=${page.link}>${page.title}</a></li>`);
        });
    });
    // !edit page
    openEditPagesButtonRef.addEventListener("click", ()=>{
        editBackdropRef.classList.toggle("is-hidden-edit");
    });
    closeEditPagesButtonRef.addEventListener("click", ()=>{
        editBackdropRef.classList.toggle("is-hidden-edit");
    });
    editNumPageRef.addEventListener("input", (evt)=>{
        const inputValue = Number(evt.target.value);
        const localStorageData = JSON.parse(localStorage.getItem("pagesList"));
        if (inputValue >= 1 && inputValue <= localStorageData.length && localStorageData.length > 0 && localStorageData) {
            editPagesTitleRef.value = localStorageData[inputValue - 1].title;
            editPagesLinkRef.value = localStorageData[inputValue - 1].link;
        } else alert("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u044F\u043A\u0435 \u0432\u0438 \u0432\u0432\u0435\u043B\u0438");
    });
    editPagesFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const inputValue = Number(editNumPageRef.value);
        const localStorageData = JSON.parse(localStorage.getItem("pagesList"));
        if (inputValue >= 1 && inputValue <= localStorageData.length && localStorageData.length > 0 && localStorageData) {
            localStorageData[inputValue - 1].title = editPagesTitleRef.value;
            localStorageData[inputValue - 1].link = editPagesLinkRef.value;
            localStorage.setItem("pagesList", JSON.stringify(localStorageData));
            pagesListRef.innerHTML = ``;
            localStorageData.forEach((page, idx)=>{
                const currentIdx = idx + 1;
                pagesListRef.insertAdjacentHTML("beforeend", `<li>${currentIdx}. <a href=${page.link}>${page.title}</a></li>`);
            });
        }
        editBackdropRef.classList.add("is-hidden-edit");
        editPagesFormRef.reset();
    });
    // !delete page
    openDeletePageButtonRef.addEventListener("click", ()=>{
        deleteBackdropRef.classList.toggle("is-hidden-delete");
    });
    closeDeletePagesButtonRef.addEventListener("click", ()=>{
        deleteBackdropRef.classList.toggle("is-hidden-delete");
    });
    deleteNumPageRef.addEventListener("input", (evt)=>{
        const localStorageData = JSON.parse(localStorage.getItem("pagesList"));
        if (evt.target.value > 0 && evt.target.value <= localStorageData.length && localStorageData) return;
        else alert("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u044F\u043A\u0435 \u0432\u0438 \u0432\u0432\u0435\u043B\u0438");
    });
    deletePagesFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const inputValue = Number(deleteNumPageRef.value);
        const localStorageData = JSON.parse(localStorage.getItem("pagesList"));
        if (inputValue > 0 && inputValue <= localStorageData.length && localStorageData) {
            localStorageData.splice(inputValue - 1, 1);
            console.log(localStorageData);
            localStorage.setItem("pagesList", JSON.stringify(localStorageData));
            pagesListRef.innerHTML = ``;
            localStorageData.forEach((page, idx)=>{
                const currentIdx = idx + 1;
                pagesListRef.insertAdjacentHTML("beforeend", `<li>${currentIdx}. <a href=${page.link}>${page.title}</a></li>`);
            });
            deleteBackdropRef.classList.add("is-hidden-delete");
            deletePagesFormRef.reset();
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7on4F":[function(require,module,exports) {
// !contacts list
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>fifthTask);
const contactsListRef = document.querySelector(".contacts__list");
// !
// ?add contact refs
const addContactOpenButtonRef = document.querySelector("[data-button=addContact]");
const addContactCloseButtonRef = document.querySelector("[data-button=contactCloseAdd]");
const addContactBackdropRef = document.querySelector("[data-backdrop=addContact]");
const addContactFormRef = document.querySelector("[data-form=addContact]");
// ?
// *edit contact refs
const editContactOpenButtonRef = document.querySelector("[data-button=editContact]");
const editContactCloseButtonRef = document.querySelector("[data-button=contactCloseEdit]");
const editContactBackdropRef = document.querySelector("[data-backdrop=editContact]");
const numEditContactRef = document.querySelector('[data-input="numEditContact"]');
const editContactFormRef = document.querySelector("[data-form=editContact]");
// *
// todo: delete contact refs
const deleteContactOpenButtonRef = document.querySelector("[data-button=deleteContact]");
const deleteContactCloseButtonRef = document.querySelector("[data-button=contactCloseDelete]");
const deleteContactBackdropRef = document.querySelector("[data-backdrop=deleteContact]");
const numDeleteContactRef = document.querySelector('[data-input="numDeleteContact"]');
const deleteContactFormRef = document.querySelector("[data-form=deleteContact]");
function fifthTask() {
    // todo open and close add contact modal
    addContactOpenButtonRef.addEventListener("click", ()=>{
        addContactBackdropRef.classList.toggle("is-hidden-add-contact");
    });
    addContactCloseButtonRef.addEventListener("click", ()=>{
        addContactBackdropRef.classList.toggle("is-hidden-add-contact");
    });
    // todo
    // !add contact
    addContactFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        let contactsArr = [];
        const contact = {
            name: evt.target.elements.name.value,
            surname: evt.target.elements.surname.value,
            tel: evt.target.elements.tel.value,
            email: evt.target.elements.email.value
        };
        if (localStorage?.getItem("contactsList") || localStorage.getItem("contactsList")) contactsArr = JSON.parse(localStorage.getItem("contactsList"));
        contactsArr.push(contact);
        localStorage.setItem("contactsList", JSON.stringify(contactsArr));
        const currentIdx = contactsArr.length;
        contactsListRef.insertAdjacentHTML("beforeend", `<li class=contacts__item>
          <h2>${currentIdx}</h2>
          <p>Name: ${contact.name}</p>
          <p>Surname: ${contact.surname}</p>
          <p>Tel: ${contact.tel}</p>
          <p>Email: ${contact.email}</p>
          </li>`);
        addContactBackdropRef.classList.add("is-hidden-contact-add");
        evt.target.reset();
    });
    document.addEventListener("DOMContentLoaded", ()=>{
        const contactsListData = JSON.parse(localStorage.getItem("contactsList"));
        if (contactsListData) contactsListData.forEach((contact, idx)=>{
            const currentIdx = idx + 1;
            contactsListRef.insertAdjacentHTML("beforeend", `<li class=contacts__item>
            <h2>${currentIdx}</h2>
            <p>Name: ${contact.name}</p>
            <p>Surname: ${contact.surname}</p>
            <p>Tel: ${contact.tel}</p>
            <p>Email: ${contact.email}</p>
            </li>`);
        });
    });
    // todo open and close edit contact modal
    editContactOpenButtonRef.addEventListener("click", ()=>{
        editContactBackdropRef.classList.toggle("is-hidden-edit-contact");
    });
    editContactCloseButtonRef.addEventListener("click", ()=>{
        editContactBackdropRef.classList.toggle("is-hidden-edit-contact");
    });
    // todo
    // !edit contact
    numEditContactRef.addEventListener("input", (evt)=>{
        const inputValue = Number(evt.target.value);
        const localStorageData = JSON.parse(localStorage.getItem("contactsList"));
        if (inputValue > 0 && inputValue <= localStorageData.length && localStorageData.length > 0 && localStorageData) {
            editContactFormRef.elements.name.value = localStorageData[inputValue - 1].name;
            editContactFormRef.elements.surname.value = localStorageData[inputValue - 1].surname;
            editContactFormRef.elements.tel.value = localStorageData[inputValue - 1].tel;
            editContactFormRef.elements.email.value = localStorageData[inputValue - 1].email;
        } else alert("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u044F\u043A\u0435 \u0432\u0438 \u0432\u0432\u0435\u043B\u0438 \u2757\uFE0F");
    });
    editContactFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const inputValue = Number(numEditContactRef.value);
        // console.log(inputValue);
        const localStorageData = JSON.parse(localStorage.getItem("contactsList"));
        // console.log(localStorageData);
        // console.log(editContactFormRef.elements.name.value);
        if (inputValue > 0 && inputValue <= localStorageData.length && localStorageData.length > 0 && localStorageData) {
            localStorageData[inputValue - 1].name = editContactFormRef.elements.name.value;
            localStorageData[inputValue - 1].surname = editContactFormRef.elements.surname.value;
            localStorageData[inputValue - 1].tel = editContactFormRef.elements.tel.value;
            localStorageData[inputValue - 1].email = editContactFormRef.elements.email.value;
            localStorage.setItem("contactsList", JSON.stringify(localStorageData));
            contactsListRef.innerHTML = ``;
            localStorageData.forEach((contact, idx)=>{
                const currentIdx = idx + 1;
                contactsListRef.insertAdjacentHTML("beforeend", `<li class=contacts__item>
        <h2>${currentIdx}</h2>
        <p>Name: ${contact.name}</p>
        <p>Surname: ${contact.surname}</p>
        <p>Tel: ${contact.tel}</p>
        <p>Email: ${contact.email}</p>
        </li>`);
            });
        }
        editContactBackdropRef.classList.add("is-hidden-edit-contact");
        evt.target.reset();
    });
    // todo open and close delete modal
    deleteContactOpenButtonRef.addEventListener("click", ()=>{
        deleteContactBackdropRef.classList.toggle("is-hidden-delete-contact");
    });
    deleteContactCloseButtonRef.addEventListener("click", ()=>{
        deleteContactBackdropRef.classList.toggle("is-hidden-delete-contact");
    });
    // todo
    // !delete contact
    numDeleteContactRef.addEventListener("input", (evt)=>{
        const inputValue = Number(evt.target.value);
        const localStorageData = JSON.parse(localStorage.getItem("contactsList"));
        if (inputValue > 0 && inputValue <= localStorageData.length && localStorageData) return;
        else alert("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u044F\u043A\u0435 \u0432\u0438 \u0432\u0432\u0435\u043B\u0438 \u2757\uFE0F");
    });
    deleteContactFormRef.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        const inputValue = Number(numDeleteContactRef.value);
        const localStorageData = JSON.parse(localStorage.getItem("contactsList"));
        if (inputValue > 0 && inputValue <= localStorageData.length && localStorageData) {
            localStorageData.splice(inputValue - 1, 1);
            localStorage.setItem("contactsList", JSON.stringify(localStorageData));
            contactsListRef.innerHTML = ``;
            localStorageData.forEach((contact, idx)=>{
                const currentIdx = idx + 1;
                contactsListRef.insertAdjacentHTML("beforeend", `<li class=contacts__item>
      <h2>${currentIdx}</h2>
      <p>Name: ${contact.name}</p>
      <p>Surname: ${contact.surname}</p>
      <p>Tel: ${contact.tel}</p>
      <p>Email: ${contact.email}</p>
      </li>`);
            });
            deleteContactBackdropRef.classList.add("is-hidden-delete-contact");
            evt.target.reset();
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4rkIz","8lqZg"], "8lqZg", "parcelRequire3328")

//# sourceMappingURL=index.975ef6c8.js.map
