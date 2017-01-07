import Inferno from 'inferno'
import { Route } from 'inferno-router'

import Home from './pages/home';
import Layout from './tags/layout';
import Article from './pages/article';
import Error404 from './pages/errors/404';
import Credit from './pages/credit';
import Blog from './pages/blog';

export default (
	<Route component={ Layout }>
		<Route path="/" component={ Home } />
		<Route path="/credit" component={ Credit } />
		<Route path="/blog" component={ Blog } />
		<Route path="/blog/:title" component={ Article } />
		<Route path="*" component={ Error404 } />
	</Route>
);
