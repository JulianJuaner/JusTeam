/**
* Project:  JusTeam/client
*
* Module name: Theme Ocerrider
*
* Author: ZHANG Yuechen
*
* Date created: 20180330
*
* Purpose: Change the Original .less settings e.g. Theme Colors. 
*
* Revision History:
*
* Date      Author          Ref    Revision
* 20180330  Julian          1      Override the theme color from blue to green.
*
**/
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
     config = rewireLess.withLoaderOptions({
     modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);
  return config;
};
