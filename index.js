// Module dependencies
var fs   = require('fs'),
    path = require('path');

// 3rd-party Module dependencies
var commander = require('commander'),
    mkdirp    = require('mkdirp');

// Load Utilities
var Util = require('./lib/util');
var util = new Util();

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

// Files
var license   = fs.readFileSync(__dirname + '/templates/LICENSE', 'utf-8');
var gitignore = fs.readFileSync(__dirname + '/templates/.gitignore', 'utf-8');
var npmignore = fs.readFileSync(__dirname + '/templates/.npmignore', 'utf-8');
var travis    = fs.readFileSync(__dirname + '/templates/.travis.yml', 'utf-8');

function generator() {
    console.log(pkg_path);
    var mkdir = util.mkdir,
        writeFile = util.writeFile;

    mkdir(pkg_path, function() {
        mkdir(pkg_path + '/lib');
        mkdir(pkg_path + '/bin');
        writeFile(pkg_path + '/LICENSE', license);
        writeFile(pkg_path + '/.gitignore', gitignore);
        writeFile(pkg_path + '/.npmignore', npmignore);
        writeFile(pkg_path + '/.travis.yml', travis);
    });
}

module.exports = generator;
