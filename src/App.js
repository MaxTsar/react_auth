import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Toolbar from './components/Toolbar.jsx';
import Warn from './components/Warn.jsx';

// pages
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				auth: false
			},
			posts: []
		};
		this.enter = this.enter.bind(this);
		this.sendPost = this.sendPost.bind(this);
	}

	componentDidMount() {
		const _auth = localStorage.getItem("_authBlog");
		if(_auth) {
			const user = JSON.parse(_auth);
			this.setState({user});
		}
	}

	sendPost(post) {
		const time = new Date();
		let seconds = time.getSeconds();
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		post.time = time.getHours()+':'+time.getUTCMinutes()+':'+seconds;		
		post.author = this.state.user.nick;
		post.id = Math.random();
		const posts = this.state.posts.concat(post);
		this.setState({posts});
		console.log('sendPOST', post);
	}

	enter(user) {
		if((user.nick && user.password) === 'admin') {
			this.setState({user}, () => {
				localStorage.setItem("_authBlog", JSON.stringify(this.state.user));
			});
			console.log('enter');
			console.log(localStorage.getItem("_authBlog"));
		}
	}

	render() {
		return (
			<Router>
				<div className="app">
					<Toolbar user={this.state.user} />
					<Warn />
					<Switch>
						<Route exact path="/" 
								render={(props) => <Home 
									posts={this.state.posts} 
									user={this.state.user}
									sendPost={this.sendPost} />} />
						<Route path="/login" render={() => <Login user={this.state.user} enter={this.enter} />} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;