/**
 * Playing around with React transition groups. 
 * 
 * (c) 2016. modsoussi.
 */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Hello = React.createClass({
	getInitialState: function() {
		return {tab: true};
	},
	handleClick: function(){
		this.setState({tab: !this.state.tab});
	},
	render: function(){
		var content;
		if(this.state.tab){
			content = <p key="hello"> Hello, World!</p>;
		} else {
			content = <p key="goodbye"> I will be back, World! </p>;
		};

		return(
			<div>
				<button onClick={this.handleClick}>Switch</button>
				<ReactCSSTransitionGroup transitionName="example" 
					transitionAppear={true} 
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={0.1}>
					{content}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

ReactDOM.render(
	<Hello />,
	document.getElementById('main')
);