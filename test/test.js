const plugin = require('../lib');
const posthtml = require('posthtml');
const path = require('path');
const { readFileSync } = require('fs');

describe('posthtml nunjucks plugin', () => {
    const fixture = (file) => readFileSync(path.join(__dirname, 'fixtures', `${file}.html`), 'utf8');
    const expected = (file) => readFileSync(path.join(__dirname, 'expected', `${file}.html`), 'utf8');
    const clean = (html) => html.replace(/\s/g, '');

    const process = (done, name, options) => {
        return posthtml([plugin(options)])
            .process(fixture(name))
            .then((result) => {
                expect(clean(result.html)).toEqual(clean(expected(name)));
                done();
            });
    };

    it('applies templating', (done) => {
        const options = { context: { name: 'test-name', items: { keyA: 'valueA', keyB: 'valueB' } } };
        process(done, 'basic', options);
    });
});
