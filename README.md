<div align="center">
  <img width="150" height="150" alt="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">
  <h1>PostHTML Nunjucks Plugin</h1>
  <p>A PostHTML plugin wrapping Nunjucks library.</p>

[![Version][npm-version-shield]][npm]
[![Build][github-ci-shield]][github-ci]
[![License][license-shield]][license]
[![Downloads][npm-stats-shield]][npm-stats]

</div>

### About

This is a PostHTML plugin that wraps [Nunjucks](https://mozilla.github.io/nunjucks/) library.

## Introduction

This plugin applies a Nunjucks temple to the file being processed:

Input:

```html
<div filter="uppercase">{{ name }}</div>
```

Output:

```html
<div>TEST NAME</div>
```

## Install

```
$ npm i posthtml posthtml-nunjucks
```

## Usage

Provide clear code samples showing how to use the plugin:

```js
const posthtml = require('posthtml');
const nunjucks = require('posthtml-nunjucks');

posthtml([nunjucks({ context: { name: 'TEST NAME' } })])
    .process('<div>{{ name }}</div>')
    .then((result) => console.log(result.html));

// <div>TEST NAME</div>
```

## Options

The options accepted for the plugin are:

### `config`

Type: `object`\
Default: `{}`

Configuration to be passed to nunjucks as specified [here](https://mozilla.github.io/nunjucks/api.html#configure).

### `context`

Type: `object`\
Default: `{}`

Context to be passed to the templates to be applied, as specified [here](https://mozilla.github.io/nunjucks/api.html#renderstring).
