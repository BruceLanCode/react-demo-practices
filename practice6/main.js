
	import React,{Component} from 'react'
	import ReactDOM from 'react-dom'
	import PropTypes from 'prop-types'
	var data = 123;

	class MyTitle extends Component{
		static propTypes = {
			title: PropTypes.string.isRequired,
		};
		render(){
			return <h1> {this.props.title} </h1>;
		}
	}

	// MyTitle.propTypes = {
	// 	title: PropTypes.string.isRequired,
	// }

	ReactDOM.render(
		<MyTitle title={data}></MyTitle>,
		document.getElementById('example')
	)