const path = require('path')
const Hp = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry : './js/main.js',
    output : {
        // path: path.resolve(__dirname, 'dist'),
        // filename:'main.js',
        clean:true
    },
    plugins : [ 
        new Hp({
            template:'./index.html'
        }),
        new CopyPlugin({
             patterns : [
                 { from: 'static'}
             ]
         })
    ]
}