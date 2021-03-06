var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config),{
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(5000,'localhost',function(err){
	if(err){
		console.log(err);
	}else{
		console.log("listening at localhost:5000");
	}
});