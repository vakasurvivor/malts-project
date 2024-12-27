export default function Footer() {
	return (
		<footer className="ly-footer">
			<div className="ly-footer__container">
				{/* <div className="ly-footer__email">
					<i className="fa-regular fa-envelope"></i>
					<a href="mailto:malts@wk9.so-net.ne.jp">malts@wk9.so-net.ne.jp</a>
				</div>
				<div className="ly-footer__tel">
					<i className="fa-solid fa-phone"></i>
					<a href="tel:03-3796-4153">03-3796-4153</a>
				</div> */}
				<div className="ly-footer__copyright">
					<small>Copyright © </small>
					<small className="ly-footer__AD" data-ad="">
						{' '}
						MALTS
					</small>
				</div>
			</div>
		</footer>
	);
}
