import React from 'react';
import { render as ReactDomRender } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import ReduxStore from './reducers/store';

// Components
import Products from './components/products';

ReactDomRender(
    <Provider store={ReduxStore}>
        <Router history={browserHistory}>
            <Route path="/" component={Products}></Route>
        </Router>
    </Provider>, document.querySelector('.react-root')
);
