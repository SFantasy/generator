// Module dependencies
var fs   = require('fs'),
    path = require('path');

// 3rd-party Module dependencies
var commander = require('commander'),
    mkdirp    = require('mkdirp');

// Pacakge info
var pkg = require('./package.json');

commander
    .version(pkg.version)
    .on('--help', function() {
        console.log('  Example:');
        console.log('');
        console.log('  $ npm-generator test');
        console.log('');
    }).parse(process.argv);

// Pcakge path
var pkg_path = commander.args.shift() || '.';

function generator() {
    console.log(pkg_path);
}

module.exports = generator;
