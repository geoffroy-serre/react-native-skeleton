# react-native-skeleton


React Native Expo skeleton with eslint configured.

Eslint configuration plugin: https://github.com/intellicode/eslint-plugin-react-native

## Eslint
Some options are commented in eslint config file. Feel free to comment more or uncomment those you want to use.
You can create a script to trigger eslint checks, or use VsCode Eslint plugin which will use the given configuration.
This configuration only check errors and syntax, not style.

Script example:
```js
"lint": "eslint . --ext .js,.jsx --ignore-pattern node_modules/"
```
### Eslint config
Create a file named .eslintrc.json and fill it with this :
```js
{
	"env": {
		"browser": true,
		"es2021": true,
		"react-native/react-native": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "react-native"],
	"rules": {
		"react-native/no-unused-styles": 2,
		"react-native/no-inline-styles": 2,
		"react-native/no-raw-text": 2
		// "react-native/sort-styles": 2
		// "react-native/no-color-literals": 2,
		// "react-native/split-platform-components": 2,
		// "react-native/no-single-element-style-arrays": 2
	},
	"settings": {
		"react": {"version": "detect"}
	}
}
```


## Prettier
Prettier isn't setted here, as I use VSCode extension for prettier and it is configured in it.
If you're not alone on your project, it's recommended to have prettier's configuration in your project, to standardize the code rules between developpers.
