# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build

# svgo Optimize SVG webpack
npm install svgo-loader --save-dev

https://www.npmjs.com/package/figma-export-icons

# svgo Optimize CLI
npm -g install svgo
svgo -f ./src/assets/icons -o ./src/assets/icons-svgo
https://github.com/svg/svgo#configuration
https://github.com/svg/svgo-loader

https://github.com/JetBrains/svg-sprite-loader

# Icon font
npm install -g fantasticon
fantasticon my-icons -o icon-dist
https://www.npmjs.com/package/icon-font-generator

# SVG sprite
npm i svg-sprite-loader
npm install svg-sprite-loader -D


npm i vue-svg-sprite
https://svg-sprite.github.io/svg-sprite/#json


npm install svg-sprite -g
npm install phantomjs-prebuilt@2.1.13 --ignore-scripts


yarn add -D svg-sprite


https://glyphs.fyi/docs/plugin/install-plugin