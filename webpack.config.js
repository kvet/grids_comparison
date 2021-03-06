var path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        adazzle: path.join(__dirname, 'adazzle'),
        zippyui: path.join(__dirname, 'zippyui'),
        'fixed-table': path.join(__dirname, 'fixed-table')
    },
    output: {
		publicPath: '/',
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: "babel"
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
}