/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  var config = { map: {}, packages: {}, bundles: {}, transpiler: '' };
  config.map = {
    'app': 'app', // this is where your transpiled files live
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
    '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',

    'rxjs': 'node_modules/rxjs',
  };
  config.packages = {
    'app': { main: 'main.js', format: 'cjs', defaultExtension: 'js' },
    'app/core': { main: 'index.js', format: 'cjs', defaultExtension: 'js' },
    'app/ixup': { main: 'index.js', format: 'cjs', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
  }

  System.config(config);

})(this);

