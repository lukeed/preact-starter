import { render } from 'preact';
import GAnalytics from 'ganalytics';
import './index.sass';

let elem, App;
function init() {
	App = require('./views').default;
	elem = render(App, document.getElementById('root'), elem);
}

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/sw.js');
	}

	// add Google Analytics
	window.ga = new GAnalytics('UA-XXXXXXXX-X');
} else {
	// use preact's devtools
	require('preact/devtools');
	// listen for HMR
	if (module.hot) {
		module.hot.accept('./views', init);
	}
}
