
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DDNet.org/',
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
    'index.csr.html': {size: 3288, hash: 'b3d25ed78287f1b7a635b28ebf69fb8afacbe13d239835c806f0820db0d4f5b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1112, hash: '0c6400e12a5e5c6120bd927001ded552138a2e0e0e1e9e479c2924e03383e940', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GBWBSAVY.css': {size: 17671, hash: 'iLfO5z2nj8A', text: () => import('./assets-chunks/styles-GBWBSAVY_css.mjs').then(m => m.default)}
  },
};
