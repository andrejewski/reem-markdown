reem-markdown
===

Markdown for Reem

## Installation

```bash
npm install reem-markdown # --save for projects
```

## Usage

```javascript
var markdown = require('reem-markdown');
reem.Post.use(markdown([options]));
```

## About 

`reem-markdown` is a plugin for [Reem](https://github.com/andrejewski/reem) that will take file content (markdown) and transform it into HTML which will be set on the file's `content` property.

## Options

This plugin uses [`marked`](https://github.com/chjj/marked) for Markdown conversion and any options passed to this plugin are passed to the converter. If you would like things like Github favored Markdown and code highlighting, see Marked for how to accomplish those things.

## Contributing

If you have an issue or find a bug open an issue and I will see what we can do. If you can fix the bug yourself, by all means send a pull request for consideration.

Until `reem` and `reem-markdown` hit v1, I would like to keep backwards compatibility with the v0.0.1, treating it like v1. When the conditions are met for v1, we can cut away the cruft of v0.