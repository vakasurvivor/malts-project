export default function Contact() {
	return (
		<>
			<article className="p-contact" id="contact">
				<div className="p-contact__title--box">
					<h2 className="p-contact__title js-title">CONTACT</h2>
				</div>

				<div className="p-contact__inner">
					<form className="p-contact__form" action="" noValidate>
						<p className="p-contact__text">
							下記項目に必要事項を入力し、「送信」ボタンをクリックしてください。
							<br />
							※印は必須項目です。
						</p>
						<div className="p-contact__name">
							<label htmlFor="family-name">
								<i className="fa-regular fa-user"></i>お名前*
							</label>
							<div className="p-contact__name--inner">
								<input
									type="text"
									id="family-name"
									name="family-name"
									autoComplete="family-name"
									placeholder="例） 令和"
									required
								/>

								<input
									type="text"
									name="given-name"
									autoComplete="given-name"
									placeholder="例） 太郎"
									required
								/>
							</div>
						</div>

						<div className="p-contact__name">
							<label htmlFor="furigana">
								<i className="fa-regular fa-user"></i>フリガナ*
							</label>
							<div className="p-contact__name--inner">
								<input
									type="text"
									id="furigana"
									name="furigana-familyname"
									placeholder="例） レイワ"
									required
								/>

								<input
									type="text"
									name="furigana-firstname"
									placeholder="例） タロウ"
									required
								/>
							</div>
						</div>

						<div className="p-contact__company">
							<label htmlFor="organization">
								<i className="fa-regular fa-user"></i>会社名*
							</label>
							<input
								type="text"
								id="organization"
								name="organization"
								autoComplete="organization"
								placeholder="例） 株式会社 令和"
								required
							/>
						</div>

						<div className="p-contact__email">
							<label htmlFor="email">
								<i className="fa-regular fa-envelope"></i>メールアドレス*
							</label>
							<input
								type="email"
								id="email"
								name="email"
								autoComplete="email"
								placeholder="例） email@example.com"
								required
							/>
						</div>

						<div className="p-contact__message">
							<label htmlFor="message">
								<i className="fa-regular fa-message"></i>お問い合わせ*
							</label>
							<textarea
								id="message"
								name="message"
								placeholder="お問い合わせ内容をご記入ください。"
								required
								rows="8"
							></textarea>
						</div>
						<button className="p-contact__submit" id="submit">
							送信
						</button>
					</form>
				</div>
			</article>
		</>
	);
}
