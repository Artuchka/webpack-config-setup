# webpack-config-setup
simple explaining configuring the webpack config file while going from simplicity towards complexity


0. initialize the project:
	* npm init -y
0. install libraries:
	* npm i --save-dev webpack webpack-cli
	* npm i --save-dev html-webpack-plugin mini-css-extract-plugin
	* npm i --save-dev style-loader css-loader postcss postcss-loader postcss-preset-env sass sass-loader
	* npm i --save-dev webpack-dev-server


1. SETTING UP ENTRY js FILE
- => create src/index.js
- => add scripts to package.json:
```
	 "scripts": {
	 	"start": "NODE_ENV=development webpack server --open",
	 	"dev": "NODE_ENV=development webpack",
	 	"prod": "NODE_ENV=production webpack"
	 },
	 ```

@(additionaly) try running them to see that webpack emits main.js to dist folder(run dev) and browser window opens(run start) 


2. SETTING UP ENTRY HTML FILE
- => create src/index.html
- => create webpack.config.js
- => setup mode setting in config file
- => setup `html-webpack-plugin` in config file (in plugins array + template property)
	```  const HtmlWebpackPlugin = require('html-webpack-plugin')```

@YOU HAVE AUTO ADDING JS TO HTML


3. SETTING UP ENTRY css STYLES FILE
- => add ./src/styles.css
- => import styles.css into entry js file
- => setup rule for /\.css$/i with css-loader + style-loader

@woalua, you have your css auto added to your index(with main.js) but only for `development` mode(in `production` mode  it's not effective way to add styles to the DOM, you rather use `mini-css-extact-plugin` for prod)

@let's set up extracting css for `production` mode:

- => add
	```  const MiniCssExtractPlugin = require("mini-css-extract-plugin") ```
	+ to plugins
- => change 
```
	  `style-loader` 
	  to 
	  mode === "production"
						  ? MiniCssExtractPlugin.loader
						  : "style-loader",
						```

@woalua, you have separated css file and now it's linked directly in html output file!

	 
4. SETTING UP ENTRY preprocessor (scss\sass) STYLES FILE
- => add 'sass-loader' to `use` array
- => update test value:
	```/\.(css|sass|scss)$/i```
- => add ./src/styles/styles.scss
- => update import in entry js file

- @woalua, you have sass support


4. SETTING UP IMAGES (which are from css) FOLDER(assets) 
- => add ./src/img/any-image-name.png or any extension out there
- => add rule to specify the type of image files (so they will be treated as assets)
	``` {	
		test: /\.(png|jpeg|jpg|svg|gif)$/i,
		type: "asset/resource",
	 },```
- => add `output` to module.exports in config 
	``` output: {
		assetModuleFilename: "assets/[name][ext][query]",
	 },```

- 5. CLEAN OUTPUT FOLDER BEFORE BUNDLING
- => add to `output`
		``` clean: true,```





















	
