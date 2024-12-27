import { setupLenis } from '../library/lenis';
const lenis = setupLenis();

export default function Header() {
	function handleHeaderButtonEl() {
		// ly-header__logo 要素を取得
		const headerLogoEl = document.querySelector('.ly-header__logo');
		// ly-header__button 要素を取得
		const headerButtonEl = document.querySelector('.ly-header__button');
		// ly-header__button--line 要素を取得
		const headerButtonLineEl = document.querySelectorAll(
			'.ly-header__button--line'
		);
		// ly-header__nav 要素を取得
		const headerNavEl = document.querySelector('.ly-header__nav');

		headerLogoEl.classList.toggle('active');

		// ナビボタンのアニメーション
		headerButtonEl.classList.toggle('active');

		// ナビボタンのラインアニメーション
		headerButtonLineEl.forEach((e) => {
			e.classList.toggle('active');
		});

		// ナビゲーションの開閉
		headerNavEl.classList.toggle('active');

		if (headerNavEl.classList.contains('active')) {
			lenis.stop();
		} else {
			lenis.start();
		}
	}

	return (
		<header className="ly-header">
			<div className="ly-header__inner">
				<h1 className="ly-header__logo">
					<a href="">MALTS</a>
				</h1>
				<div className="ly-header__button" onClick={handleHeaderButtonEl}>
					<span className="ly-header__button--line"></span>
					<span className="ly-header__button--line"></span>
					<span className="ly-header__button--line"></span>
				</div>
			</div>

			<nav className="ly-header__nav">
				<ul className="ly-header__nav--menu">
					<li className="ly-header__nav--item">
						<a href="#top">TOP </a>
						<span className="ly-header__nav--line"></span>
					</li>
					<li className="ly-header__nav--item">
						<a href="#about">ABOUT </a>
						<span className="ly-header__nav--line"></span>
					</li>
					<li className="ly-header__nav--item">
						<a href="#works">WORKS </a>
						<span className="ly-header__nav--line"></span>
					</li>
					<li className="ly-header__nav--item">
						<a href="#company">COMPANY </a>
						<span className="ly-header__nav--line"></span>
					</li>
					<li className="ly-header__nav--item">
						<a href="#contact">CONTACT </a>
						<span className="ly-header__nav--line"></span>
					</li>
				</ul>
			</nav>
		</header>
	);
}
