/**
 * Markuplint 設定
 * @see https://markuplint.dev/ja/docs/configuration
 */

const config = {
	// 解析の設定
	extends: ['markuplint:recommended'],
	// 解析対象から除外するファイル
	excludeFiles: ['./node_modules/', './dist'],
	// 解析ルール
	rules: {
		'character-reference': false,
	},
	// 特定の要素のみの解析ルール
	nodeRules: [
		{
			selector: 'img',
			rules: {
				'required-attr': ['alt', 'src'],
			},
		},
	],
};

module.exports = config;
