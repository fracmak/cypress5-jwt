# cypress 5 compilation failure

This repo recreates a cypress 5 compilation failure when you mix babel-plugin-react-intl and jsonwebtoken

If you uninstall babel-plugin-react-intl (which isn't referenced anywhere), tests will start to pass

## Scripts

* `npm run run` - runs a cypress test
* `npm run open` - opens cypress debugger
