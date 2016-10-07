import React, { Component } from 'react';
import Editor from './Editor';
import RichEditor from './RichEditor';

require('../../public/style/main2.scss');

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div>
				<RichEditor />
			</div>
		);
	}
}
