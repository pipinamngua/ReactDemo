import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="jumbotron">
            	<h1 className="display-3" align="center">Project quan ly nguoi dung</h1>
        	</div>
		);
	}
}
