import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);

/**
 * https://gsap.com/resources/frameworks
 */

export default function Website() {
	const container = useRef(null);
	useGSAP(
		() => {
			const wrapper = document.querySelector('.js-website__wrapper');
			const slides = gsap.utils.toArray('.js-website__scroll');
			const wrapperWidth = wrapper.offsetWidth;
			// gsap code here...
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
		},
		{ scope: container }
	);

	return (
		<>
			{/* <!-- website --> */}
			<section className="p-works__website js-website__wrapper" ref={container}>
				<div className="c-works js-website">
					<div
						className="c-works__subtitle--box"
						// style={{ borderLeft: '4px solid #000' }}
					>
						<h2
							className="c-works__subtitle js-websiteTitle"
							style={{ color: '#333' }}
						>
							WEBSITE
						</h2>
					</div>
					{/* <!-- website images--> */}
					<div className="p-works__website--images">
						<div className="c-flex__work">
							<figure className="c-flex__work--img js-website__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/website/23_website.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img src="./img/works/website/23_website_scroll.jpg" alt="" />
								</picture>
							</figure>

							<figure className="c-flex__work--img js-website__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/website/JEED_website.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img
										src="./img/works/website/JEED_website_scroll.jpg"
										alt=""
									/>
								</picture>
							</figure>

							<figure className="c-flex__work--img js-website__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/website/jinai_website.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img
										src="./img/works/website/jinai_website_scroll.jpg"
										alt=""
									/>
								</picture>
							</figure>

							<figure className="c-flex__work--img js-website__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/website/naikakufu_website.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img
										src="./img/works/website/naikakukfu_website_scroll.jpg"
										alt=""
									/>
								</picture>
							</figure>

							<figure className="c-flex__work--img js-website__scroll">
								<picture className="show">
									<source />
									<img src="./img/works/website/tokyu_website.jpg" alt="" />
								</picture>
								<picture className="hide">
									<source />
									<img
										src="./img/works/website/tokyu_website_scroll.jpg"
										alt=""
									/>
								</picture>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
