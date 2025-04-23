
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-ENDXCO43.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 3278, hash: 'a0d89dd1fb6d1132b44d58f47a16c51a614695a347fdff4067b9ecd1094d3af2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: 'b086e038d5bf2a063e85591c592ff69a1d2770da66ea5b67c7a6578299771ca1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GBWBSAVY.css': {size: 17671, hash: 'iLfO5z2nj8A', text: () => import('./assets-chunks/styles-GBWBSAVY_css.mjs').then(m => m.default)}
  },
};
