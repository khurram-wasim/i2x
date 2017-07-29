
const hostName='localhost';
if (process.env.NODE && ~process.env.NODE.indexOf("heroku"))
   hostName:'i2x-ai-challenge.herokuapp'

var config = {
   entry: './index.js',
   output: {
      path:'/',
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      host: hostName,
      port: process.env.PORT || 8080
   },
   module: {
     loaders: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         },
         {test: /\.css$/, loader: 'style-loader!css-loader'},
         {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'},
      ]
   }
}
module.exports = config;
