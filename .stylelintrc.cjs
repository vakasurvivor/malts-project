/**
 * Stylelint 設定
 * @see https://stylelint.io/user-guide/configure
 */

const config = {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-property-sort-order-smacss',
	],
	plugins: ['stylelint-scss', 'stylelint-order'],
	ignoreFiles: ['**/node_modules/**', './dist/**'],
	rules: {
		// @import、@use、@forward、およびパラメータの部分名の先頭にアンダースコアを使用を許可する
		'scss/load-no-partial-leading-underscore': null,
	},
};

module.exports = config;
