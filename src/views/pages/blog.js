import { h } from 'preact';
import Card from '../tags/card';
import CardLink from '../tags/card-link';

export default function (props) {
	return (
		<div className="page page__blog">
			<Card>
				<h1>Blog</h1>
				<p>Please select an Article to read.</p>
			</Card>

			<nav>
				{
					[1,2,3,4,5,6,7,8,9,10].map(i =>
						<CardLink href={ `/blog/article${i}` }>
							<strong>Article #{i}</strong>
							<em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore enim, natus. Beatae ducimus quasi doloremque ad quam qui dolor, architecto repellendus provident rem nostrum accusamus, magnam voluptate vel voluptas iste.</em>
						</CardLink>
					)
				}
			</nav>
		</div>
	);
}
