import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
	const container = useRef(null);
	useGSAP(
		() => {
			const aboutUs = document.querySelector('.p-about');
			const aboutUsText = document.querySelector('.p-about__desc');
			const aboutUsTextHeight = aboutUsText.offsetHeight;
			const container = document.querySelector('.p-about__container');
			const containerHeight = container.offsetHeight;

			const aboutUsLogo01 = document.querySelector('.c-logo-motion');
			const aboutUsLogo02 = document.querySelector('.c-logo-motion02');
			// const aboutUsLogo03 = document.querySelector('.c-logo-motion03');

			// gsap code here...
			const aboutUsTextScroll = () =>
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

			const aboutUsLogoScroll01 = (Selector) =>
				gsap.to(Selector, {
					scrollTrigger: {
						trigger: aboutUsText, // アニメーション開始のトリガー要素
						scrub: 1, // スクロール量に合わせてアニメーション
						start: '15% top', // アニメーションが始まる位置
						// end: `${aboutUsTextHeight}`,
						end: '28% end',
						anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
						invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
						// markers: true,
					},

					autoAlpha: 0,
					ease: 'none',
				});

			const aboutUsLogoScroll02 = (Selector) =>
				gsap.to(Selector, {
					scrollTrigger: {
						trigger: aboutUsText, // アニメーション開始のトリガー要素
						scrub: 1, // スクロール量に合わせてアニメーション
						start: '28% top', // アニメーションが始まる位置
						end: `${aboutUsTextHeight}`,
						// end: 'end',
						anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
						invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
						// markers: true,
					},

					autoAlpha: 0,
					ease: 'none',
				});

			let mm = gsap.matchMedia();
			mm.add('(min-width: 1024px)', () => {
				aboutUsTextScroll();
				aboutUsLogoScroll01(aboutUsLogo01);
				aboutUsLogoScroll02(aboutUsLogo02);
			});
		},
		{ scope: container }
	);

	return (
		<>
			<div className="p-about" id="about" ref={container}>
				<div className="p-about__container">
					<div className="p-about__desc--wrapper">
						<div className="p-about__desc">
							<div className="p-about__title--wrapper">
								<div className="p-about__title--inner">
									<h2 className="p-about__title">ABOUT US</h2>
									<h3 className="p-about__subtitle">
										モルツが大切にしていること
									</h3>
								</div>
							</div>

							<div className="p-about__text--wrapper">
								<div className="p-about__text--inner">
									<p className="p-about__text">
										まず、見た目の美しさだけでなく、
										<br />
										マーケティング的な視点からデザインを構築し、
										<br />
										メッセージとの融合を目指します。
										<br />
										効果的なコミュニケーションを提供し、
										<br />
										クライアントとの関係を築き上げます。
									</p>
									<p className="p-about__text">
										そしてもう一つ、デザインという
										<br />
										コミュニケーションを通じてクライアントと協力し、
										<br />
										共に喜びを分かち合える仕事をすること。
										<br />
										そのために私たちは、作品という成果が実るよう、
										<br />
										日々デザインという“畑”を耕し続けています。
									</p>
									<p className="p-about__text">
										“ モルツ ” は、企画から制作ディレクションまで、
										<br />
										トータルに手がけているデザイン会社です。
										<br />
										直接取引から大手代理店や出版社などを受注先として、
										<br />
										大手、中小企業、または各種団体など
										<br />
										さまざまな業種、業態の広告を企画から参加しながら
										<br />
										グラフィックデザイン業務を中心に、
										<br />
										お手伝いさせていただきます。
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="p-about__logo">
						<div className="c-logo-motion">
							<div className="c-logo-motion__outer">
								<img
									className="c-logo-motion__inner"
									src="./img/malts-logo.svg"
									alt="malts-logo"
								/>
							</div>
						</div>
						<div className="c-logo-motion02">
							<div className="c-logo-motion__outer">
								<img
									className="c-logo-motion__inner"
									src="./img/about001.jpg"
									alt="malts-logo"
								/>
							</div>
						</div>
						<div className="c-logo-motion03">
							<div className="c-logo-motion__outer">
								<img
									className="c-logo-motion__inner"
									src="./img/about002.jpg"
									alt="malts-logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
