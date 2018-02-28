"use strict"
module.exports = {
	entry:'./main.js',
	output:{
		filename:'bundle.js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: "babel-loader"
			}
		]
	}
}