
var config = {
   entry: './index.js',
   output: {
      path:'build',
      filename: 'bundle.js',
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
