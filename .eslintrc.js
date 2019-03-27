module.exports = {
    parserOptions: {
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: true
        },
        parser: 'esprima'
    },
    extends: ['plugin:vue/recommended', 'standard'],
    plugins: ['vue'],
    rules: {
        semi: 'error'
    }
};
