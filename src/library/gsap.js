import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { setupLenis } from './lenis.js';

// ****************************************************************
// // GSAP 初期設定

// // 使用する gsapプラグイン を登録する
// gsap.registerPlugin(ScrollTrigger);

// // GSAP ScrollTrigger と Lenisを統合
// const lenis = setupLenis();
// lenis.on('scroll', ScrollTrigger.update);
// gsap.ticker.add((time) => {
// 	lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);

// ****************************************************************
// GSAP 自作関数作成
function openingAnimation() {
	// 開始年と終了年を指定
	const startYear = 1990;
	const endYear = new Date().getFullYear();
	// 配列を初期化 年を配列に追加
	const yearArray = [];
	for (let year = startYear; year <= endYear; year++) {
		yearArray.push(year);
	}
	// 配列の順序を逆にする // 空のdiv要素を取得
	yearArray.reverse();
	const yearList = document.getElementById('yearList');
	// 配列の内容をdiv要素に追加
	yearArray.forEach((year) => {
		const listItem = document.createElement('div');
		listItem.textContent = year;
		yearList.appendChild(listItem);
	});

	// yearListの子要素であるdiv要素の高さと幅を取得
	const divElements = yearList.querySelectorAll('div');
	divElements.forEach((div) => {
		const hi = div.clientHeight; // 高さを取得
		const wi = div.clientWidth; // 幅を取得
		const hidden = document.querySelector('.p-opening__text--right');
		hidden.style.width = `${wi}px`;
		hidden.style.height = `${hi}px`;
	});

	const tl = gsap.timeline({ repeat: 0, delay: 0.5 });

	tl.to('.js-text02', {
		yPercent: -97,
		duration: 2.5,
		ease: 'power4.inOut',
	})
		.to(
			'.js-text01',
			{ autoAlpha: 0, duration: 0.5, ease: 'power3.Out' },
			'+=0.5'
		)
		.to('.js-text02', { autoAlpha: 0, duration: 0.5, ease: 'power3.Out' }, '<')
		.to(
			'.js-box',
			{
				height: '0dvh',
				duration: 0.5,
				ease: 'power2.Out',
				stagger: {
					each: 0.08,
					from: 'random',
				},
			},
			'<'
		)
		.from(
			'#mask',
			{
				y: '75%',
				autoAlpha: 0,
				duration: 1,
				ease: 'power3.Out',
			},
			'<'
		)
		.set('.p-opening', { autoAlpha: 0 });
}

/**
 * ABOUT US スクロール関数
 */

function aboutUsTextScroll() {
	const aboutUs = document.querySelector('.p-about');
	const aboutUsText = document.querySelector('.p-about__desc');
	const aboutUsTextHeight = aboutUsText.offsetHeight;
	const container = document.querySelector('.p-about__container');
	const containerHeight = container.offsetHeight;

	gsap.to(aboutUsText, {
		scrollTrigger: {
			trigger: aboutUs, // アニメーション開始のトリガー要素
			pin: true, // 要素を固定
			scrub: 1, // スクロール量に合わせてアニメーション
			start: 'top top', // アニメーションが始まる位置
			end: `${aboutUsTextHeight}`,
			anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
			invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
			// markers: true,
		},

		y: -`${aboutUsTextHeight - containerHeight}`,
		ease: 'none',
	});
}

/**
 * WORKS 画面固定横スクロール関数
 */

function worksHorizontalScroll(wrapperSelector, slideSelector) {
	const wrapper = document.querySelector(wrapperSelector);
	const slides = gsap.utils.toArray(slideSelector);
	const wrapperWidth = wrapper.offsetWidth;

	gsap.to(slides, {
		xPercent: -100 * (slides.length - 1), // -X軸方向に移動
		x: 32 * 3,
		ease: 'none', // アニメーションのイージング(noneは定速)
		scrollTrigger: {
			trigger: wrapper, // アニメーション開始のトリガー要素
			pin: true, // 要素を固定
			scrub: 1, // スクロール量に合わせてアニメーション
			start: 'bottom bottom', // アニメーションが始まる位置
			end: `+=${wrapperWidth}`, // アニメーションが終わる位置
			anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
			invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
			// markers: true,
		},
	});
}

/**
 * タイトルアニメーション関数
 * @param {*} titleSelector
 * 引数には、複数のタイトルセレクターを渡す
 * GSAPの組み込みメソッド utils.toArray() で配列化
 */

function titleScroll(titleSelector) {
	const titleEl = document.querySelector(titleSelector);

	gsap.from(titleEl, {
		scrollTrigger: {
			trigger: titleEl,
			start: 'top 75%',
			once: true,
			// scrub: true,
			// markers: true,
		},

		duration: 1,
		ease: 'power3.out',

		color: 'transparent',
		xPercent: -100,
		transformOrigin: 'left',
	});
}

/**
 * サブタイトルアニメーション関数
 * @param {*} subTitleSelector
 * @param {*} triggerSelector
 * トリガーとなる第二引数のデフォルトに第一引数を設定
 */

function subTitleScroll(subTitleSelector, triggerSelector = subTitleSelector) {
	const triggerEl = document.querySelector(triggerSelector);
	const subTitleEl = document.querySelector(subTitleSelector);

	gsap.from(subTitleEl, {
		scrollTrigger: {
			trigger: triggerEl,
			start: 'top 75%',
			once: true,
			// scrub: true,
			// markers: true,
		},

		duration: 1,
		ease: 'power3.out',

		color: 'transparent',
		xPercent: -100,
		transformOrigin: 'left',
	});
}

// ****************************************************************

// MediaQueryを設定
let mm = gsap.matchMedia();

// Desktop (1024px～)
mm.add('(min-width: 1024px)', () => {
	// ABOUT US
	aboutUsTextScroll();

	// WORKS
	titleScroll('.p-works__title');
	subTitleScroll('.js-graphicTitle', '.p-works__title');
	worksHorizontalScroll('.js-graphic__wrapper', '.js-graphic__scroll');
	subTitleScroll('.js-websiteTitle');
	worksHorizontalScroll('.js-website__wrapper', '.js-website__scroll');
	subTitleScroll('.js-eventTitle');
	worksHorizontalScroll('.js-event__wrapper', '.js-event__scroll');

	// COMPANY
	titleScroll('.p-company__title');
	subTitleScroll('.js-infoTitle', '.p-company__title');
	subTitleScroll('.js-accessTitle');

	// CONTACT
	titleScroll('.p-contact__title');
});

// Tablet (769px～1023px)
mm.add('(min-width: 769px) and (max-width: 1023px)', () => {
	// WORKS
	titleScroll('.p-works__title');
	subTitleScroll('.js-graphicTitle', '.p-works__title');
	worksHorizontalScroll('.js-graphic__wrapper', '.js-graphic__scroll');
	subTitleScroll('.js-websiteTitle');
	worksHorizontalScroll('.js-website__wrapper', '.js-website__scroll');
	subTitleScroll('.js-eventTitle');
	worksHorizontalScroll('.js-event__wrapper', '.js-event__scroll');

	// COMPANY
	titleScroll('.p-company__title');
	subTitleScroll('.js-infoTitle', '.p-company__title');
	subTitleScroll('.js-accessTitle');

	// CONTACT
	titleScroll('.p-contact__title');
});

// Mobile (～768px)
mm.add('(max-width: 768px)', () => {
	// WORKS
	titleScroll('.p-works__title');
	subTitleScroll('.js-graphicTitle', '.p-works__title');
	subTitleScroll('.js-websiteTitle');
	subTitleScroll('.js-eventTitle');

	// COMPANY
	titleScroll('.p-company__title');
	subTitleScroll('.js-infoTitle', '.p-company__title');
	subTitleScroll('.js-accessTitle');

	// CONTACT
	titleScroll('.p-contact__title');
});

// All
mm.add('all', () => {
	openingAnimation();
});
