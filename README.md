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


## Prettier
Prettier isn't setted here, as I use VSCode extension for prettier and it is configured in it.
If you're not alone on your project, it's recommended to have prettier's configuration in your project, to standardize the code rules between developpers.
