const { series } = require('gulp');
const { rm } = require('fs/promises');
const esbuild = require('esbuild');

const outDir = './dist';
const entryPoint = './src/main.js';
const outFile = 'draughts-game-controller.js';

async function clean() {
    await rm(outDir, { recursive: true, force: true });
}

function bundle() {
    return esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        platform: 'browser',
        globalName: 'DGController',
        outfile: `${outDir}/${outFile}`,
    });
}

function bundleMin() {
    return esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        minify: true,
        platform: 'browser',
        globalName: 'DGController',
        outfile: `${outDir}/${outFile.replace(/\.js$/, '.min.js')}`,
    });
}

exports.clean = clean;
exports.build = series(clean, bundle, bundleMin);
exports.default = exports.build;
