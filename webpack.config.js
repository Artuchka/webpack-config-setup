const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = "development"
if (process.env.NODE_ENV === "production") {
	mode = "production"
}

module.exports = {
	mode: mode,
	output: {
		assetModuleFilename: "assets/[name][hash][ext][query]",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(css|sass|scss)$/i,
				use: [
					mode === "production"
						? MiniCssExtractPlugin.loader
						: "style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpeg|jpg|svg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
}
