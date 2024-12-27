import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);

export default function Opening() {
	const container = useRef(null);

	useGSAP(
		() => {
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
				.to(
					'.js-text02',
					{ autoAlpha: 0, duration: 0.5, ease: 'power3.Out' },
					'<'
				)
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
		},
		{ scope: container }
	);
	return (
		<div ref={container}>
			<div className="p-opening">
				<div className="p-opening__box01 js-box"></div>

				<div className="p-opening__box02 js-box">
					<div className="p-opening__text--left js-text01">MALTS</div>
				</div>

				<div className="p-opening__box03 js-box">
					<div className="p-opening__text--right">
						<div className="js-text02" id="yearList"></div>
					</div>
				</div>

				<div className="p-opening__box04 js-box"></div>
			</div>
		</div>
	);
}
