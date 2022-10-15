import * as React from 'react'

declare interface IProps {

}

declare interface IState {

}
export class App extends React.Component<IProps, IState> {
	constructor(props : IProps) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<p>Testing</p>
			</div>
		);
	}
}