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
var license = fs.readFileSync(__dirname + '/templates/LICENSE', 'utf-8');

function generator() {
    console.log(pkg_path);

    util.mkdir(pkg_path, function() {
        util.mkdir(pkg_path + '/lib');
        util.mkdir(pkg_path + '/bin');
        util.writeFile(pkg_path + '/LICENSE', license);
    });
}

module.exports = generator;
