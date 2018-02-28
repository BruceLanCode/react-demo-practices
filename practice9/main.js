
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Input extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: 'Hello!'
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		});
		// console.log(event);
	}

	render(){
		var value = this.state.value;
		console.log(value)
		return(
			<div>
				<input type="text" value={value} onChange={this.handleChange} />
				<p>{value}</p>
			</div>
		)
	}
}

ReactDOM.render(
	<Input/>,
	document.getElementById('example')
)