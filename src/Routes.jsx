import React from 'react';

// REACT ROUTER IMPORTS
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Link from 'react-router/lib/Link';
import createHashHistory from 'history/lib/createHashHistory';
import useRouterHistory from 'react-router/lib/useRouterHistory';

//PAGES IMPORTS
import Base from './pages/Base.jsx';
import Index from './pages/Index.jsx';
import Pagina2 from './pages/Pagina2.jsx';

//DISABLE QUERY KEY FROM URLS
const History = useRouterHistory(createHashHistory)({
    queryKey: false
});

//DEFINE ROUTES
const Routes = () =>  (
    <Router history={History}>
        <Route path="/" component={Base}>
            <IndexRoute component={Index} />
            <Route path="inicio" component={Index} />
            <Route path="nueva" component={Pagina2} />
        </Route>
        <Route path="*" component={Base} />
    </Router>
);

export default Routes;