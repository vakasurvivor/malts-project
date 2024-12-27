import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);

/**
 * https://gsap.com/resources/frameworks
 */

export default function Graphic() {
	const container = useRef(null);

	useGSAP(
		() => {
			const mediaQuery = window.matchMedia('(max-width: 768px)');
			const wrapper = document.querySelector('.js-graphic__wrapper');
			const slides = gsap.utils.toArray('.js-graphic__scroll');
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

	return (
		<>
			{/* graphic */}
			<section className="p-works__graphic js-graphic__wrapper" ref={container}>
				<div className="c-works">
					<div className="c-works__subtitle--box">
						<h2 className="c-works__subtitle js-graphicTitle">GRAPHIC</h2>
					</div>

					{/* graphic images */}
					<div className="p-works__graphic--images">
						<div className="c-flex__work">
							<figure className="c-flex__work--img js-graphic__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/graphic/todai.jpg" alt="東大病院" />
								</picture>
								<picture className="hide">
									<source />
									<img
										src="./img/works/graphic/todai_spread.jpg"
										alt="東大病院"
									/>
								</picture>
							</figure>

							<figure className="c-flex__work--img js-graphic__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/graphic/jinai.jpg" alt="東大病院" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/graphic/jinai_spread.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-graphic__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/graphic/sandisk.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/graphic/sandisk_spread.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-graphic__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/graphic/PAL.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/graphic/PAL_spread.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-graphic__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/graphic/unicity.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/graphic/unicity_spread.jpg" alt="" />
								</picture>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
