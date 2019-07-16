const path = require('path');

module.exports = {
    title: 'Styleguidist Setup Example',
    components: 'src/components/**/[A-Z]*.jsx',
    require: [
        path.join(__dirname, './src/index.scss')
    ],
    defaultExample: true,
    showSidebar: true,
    usageMode: 'expand',
    exampleMode: 'expand',
    theme: {
        baseBackground: '#fdfdfc',
        link: '#274e75',
        linkHover: '#90a7bf',
        border: '#e0d2de',
        font: ['sans-serif'],
    },
    styles: {
        Playground: {
            preview: {
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: [[0, 0, 1, 0]],
                borderRadius: 0,
            },
        },
        Markdown: {
            pre: {
                border: 0,
                background: '#fdfdfc',
            },
            code: {
                fontSize: 14,
            },
        },
    },
    ignore: ['**/*.spec.js'],
};
