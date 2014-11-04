/*
 * grunt-cp-l10n
 * 
 *
 * Copyright (c) 2014 Pavel Zemek
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('cp_l10n', 'The best Grunt plugin ever.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            //console.log(JSON.stringify(f));
            if (grunt.file.isDir(f.src[0])) {
                return false;
            }
            var src = f.src.filter(function (filepath) {
                return grunt.file.exists(filepath) && grunt.file.isFile(filepath);
            }).map(function (filepath) {
                return grunt.file.read(filepath);
            }).join(grunt.util.normalizelf('\n'));

            // Process source.
            var output = [];
            var lines = src.split(grunt.util.normalizelf('\n'));
            var prefixes = [];
            lines.forEach(function (line) {
                if (line.match(/\.?\s*\{\s*$/)) {
                    prefixes.push(line.replace(/\.?\s*\{\s*$/, '').trim() + '.');
                } else if (line.match(/^\s*\}\s*$/)) {
                    prefixes.pop();
                } else {
                    output.push(prefixes.join('') + line.trim());
                }
            });

            // Write the destination file.
            grunt.file.write(f.dest, output.join('\n'));

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
