import Inferno from 'inferno';
import { Link } from 'inferno-router';

export default function (props) {
	return (
		<Link to={ props.to } className="card">{ props.children }</Link>
	)
};
