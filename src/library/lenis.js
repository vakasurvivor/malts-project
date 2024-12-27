/**
 * Lenis（慣性スクロール専用ライブラリ）
 * 制限事項
 * CSS scroll-snapは、サポートされていない
 * Safariでは、60fpsに制限されている
 * iframeでは、スムーズスクロールが機能しなくなる
 * M1以前のMacOS Safariでは、位置固定が遅れ
 * @see https://github.com/studio-freight/lenis
 */

import Lenis from '@studio-freight/lenis';

/**
 * イージング関数
 * @see https://easings.net/ja
 * @param {number} x アニメーションの進行度（正規化された0から1までの値）
 * @return {number} イージングを適用した後の進行度（正規化された0から1までの値）
 */

const easeOutQuart = (x) => {
	return 1 - Math.pow(1 - x, 4);
};

/**
 * Lenisの初期設定
 * @return {lenis} Lenisのインスタンス
 */

export const setupLenis = () => {
	const lenis = new Lenis({
		// 慣性のの強度（0~1）
		lerp: 0.1,

		// スクロールアニメーションの継続時間(秒単位)
		// lerp が定義されている場合は、lerpが優先
		duration: 1,

		// スクロール アニメーションに使用するイージング関数
		// lerp が定義されている場合は、lerpが優先
		easing: easeOutQuart,

		// タッチイベントの慣性スクロールを有効にする
		// つまりスマートフォンに対応する
		smoothTouch: true,
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	return lenis;
};

// デバックログ;
// lenis.on('scroll', (e) => {
// 	console.log(e);
// });
