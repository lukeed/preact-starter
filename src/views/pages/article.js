import Inferno from 'inferno';
import { Link } from 'inferno-router';
import Card from '../tags/card';

export default function (props) {
	const title = props.params.title;
	return (
		<div className="page page__article">
			<Card>
				<h1>{ title }: <small>A killer story</small></h1>
				<Link to="/blog" className="back">Back to Blog</Link>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.</p>
			</Card>
		</div>
	);
}
