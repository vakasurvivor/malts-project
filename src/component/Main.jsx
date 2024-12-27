import About from './About';
import Company from './Company';
import Contact from './Contact';
import Top from './Top';
import Works from './Works';

export default function Main() {
	return (
		<main className="ly-main">
			<Top />
			<About />
			<Works />
			<Company />
			<Contact />
		</main>
	);
}
