var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;
var routes = (
    <Router.Route name="home" path="/" handler={Home}>
        <Router.Route name="route1" path="/route1" handler={Route1}/>
        <Router.Route name="route2" path="/route2" handler={Route2}/>
    </Router.Route>
);


class Home extends React.Component {
    render() {
        return <div>
            <Link to="route1">Route 1</Link>
            <Link to="route2">Route 2</Link>
            <RouteHandler />
        </div>
    }
}

class Route1 extends React.Component {
    render() {
        return <h1>Route1</h1>
    }
}

class Route2 extends React.Component {
    render() {
        return <h1>Route2</h1>
    }
}

class PageRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { handler: null };
    }
    componentDidMount() {
        Router.run(routes, this.handleNavigation.bind(this));
    }
    handleNavigation(Handler, state) {
        this.setState({
            handler: Handler
        });
    }
    render() {
        if(!this.state.handler) return null;

        var Handler = this.state.handler;
        return <Handler/>;
    }
}

React.render(<PageRouter/>, document.body);
