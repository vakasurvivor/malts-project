import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);

/**
 * https://gsap.com/resources/frameworks
 */

export default function Event() {
	const container = useRef(null);

	useGSAP(
		() => {
			const mediaQuery = window.matchMedia('(max-width: 768px)');
			const wrapper = document.querySelector('.js-event__wrapper');
			const slides = gsap.utils.toArray('.js-event__scroll');
			const wrapperWidth = wrapper.offsetWidth;

			const animateSlides = () => {
				if (!mediaQuery.matches) {
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
			};

			mediaQuery.addEventListener('change', animateSlides);
			animateSlides(); // 初回実行

			return () => {
				mediaQuery.removeEventListener('change', animateSlides);
			};
		},
		{ scope: container }
	);

	// useGSAP(
	// 	() => {
	// 		const wrapper = document.querySelector('.js-event__wrapper');
	// 		const slides = gsap.utils.toArray('.js-event__scroll');
	// 		const wrapperWidth = wrapper.offsetWidth;
	// 		// gsap code here...
	// 		gsap.to(slides, {
	// 			xPercent: -100 * (slides.length - 1), // -X軸方向に移動
	// 			x: 32 * 3,
	// 			ease: 'none', // アニメーションのイージング(noneは定速)
	// 			scrollTrigger: {
	// 				trigger: wrapper, // アニメーション開始のトリガー要素
	// 				pin: true, // 要素を固定
	// 				scrub: 1, // スクロール量に合わせてアニメーション
	// 				start: 'bottom bottom', // アニメーションが始まる位置
	// 				end: `+=${wrapperWidth}`, // アニメーションが終わる位置
	// 				anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
	// 				invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
	// 				// markers: true,
	// 			},
	// 		});
	// 	},
	// 	{ scope: container }
	// );

	return (
		<>
			<section
				className="p-works__event-promo js-event__wrapper"
				ref={container}
			>
				<div className="c-works">
					<div className="c-works__subtitle--box">
						<h2 className="c-works__subtitle js-eventTitle">
							EVENT & PROMOTION
						</h2>
					</div>
					<div className="p-works__event-promo--images">
						<div className="c-flex__work">
							<figure className="c-flex__work--img js-event__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/event/haruyama.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/event/haruyama_spread.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-event__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/event/cable.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/event/cable.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-event__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/event/Microsoft.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/event/Microsoft.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-event__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/event/fukushima.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/event/fukushima.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-event__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/event/symposium.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/event/symposium.jpg" alt="" />
								</picture>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
