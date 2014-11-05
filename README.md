# grunt-cp-l10n

> Helper task for localization files.

If you have a lot of localization messages with long prefixes like this:

```
# Preferences -- comment
admin.ui.prefs.form.title=Preferences
admin.ui.prefs.form.name=Name
admin.ui.prefs.form.address.street=Street
admin.ui.prefs.form.address.city=City
admin.ui.prefs.form.submit=Save
```

you can use this plugin and write:

```
# Preferences -- comment
admin.ui.prefs.form {
    title=Preferences
    name=Name
    address {
        street=Street
        city=City
    }
    submit=Save
}
```
to produce a file shown above.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cp-l10n --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cp-l10n');
```

## The "cp_l10n" task

### Overview
In your project's Gruntfile, add a section named `cp_l10n` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cp_l10n: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
###0.1.1
Added parsing of comments.

###0.1.0
First release.
