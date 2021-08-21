'use strict';

const nunjucks = require('nunjucks');
const { render } = require('posthtml-render');
const { parser } = require('posthtml-parser');
const packageName = require('../package.json').name;
const debug = require('debug')(packageName);

module.exports =
    (options = {}) =>
    (tree) => {
        const config = options.config || {};
        const context = options.context || {};

        nunjucks.configure(config);
        debug('configuration', config);

        const rendered = render(tree);
        debug('rendered', rendered);

        const templated = nunjucks.renderString(rendered, context);
        debug('templated', templated);

        const parsed = parser(templated);
        debug('parsed', parsed);

        return parsed;
    };
