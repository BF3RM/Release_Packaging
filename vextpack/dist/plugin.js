"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VextPackPlugin = void 0;
var compiler_1 = require("./compiler");
var path_1 = require("path");
var VextPackPlugin = /** @class */ (function () {
    function VextPackPlugin(options) {
        this._options = __assign({ outputPath: '../', hotReloadSupport: false }, options);
        // TODO: Catch invalid compiler options
        this._vuicc = new compiler_1.VuicCompiler(path_1.join(__dirname, 'vuicc.exe'));
    }
    VextPackPlugin.prototype.apply = function (compiler) {
        var _this = this;
        if (process.platform !== 'win32') {
            console.error('vuicc.exe currently only supports Windows, compiler disabled.');
            return;
        }
        if (this._options.hotReloadSupport) {
            console.log('VextPack: Enabling Hot Reload Support');
            return compiler.hooks.afterPlugins.tap(VextPackPlugin.name, function () {
                return _this._vuicc.compile({
                    sourcePath: path_1.join(__dirname, '..', 'proxy'),
                    outputPath: _this._options.outputPath
                });
            });
        }
        else {
            compiler.hooks.afterEmit.tapPromise(VextPackPlugin.name, function (compilation) {
                // Ignore child compilers
                if (compilation.compiler.isChild()) {
                    return Promise.resolve();
                }
                // Ignore failed compilations
                if (compilation.errors.length > 0) {
                    return Promise.resolve();
                }
                return _this._vuicc.compile({
                    sourcePath: compilation.outputOptions.path,
                    outputPath: _this._options.outputPath
                });
            });
        }
    };
    return VextPackPlugin;
}());
exports.VextPackPlugin = VextPackPlugin;
