
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
	
class MyComponent extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	handleClick(){
		this.refs.myTextInput.focus();
	}
	render(){
		return(
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input" 
				onClick={this.handleClick.bind(this)} />
			</div>
		);
	}
} 

ReactDOM.render(
	<MyComponent />,
	document.getElementById('example')
);