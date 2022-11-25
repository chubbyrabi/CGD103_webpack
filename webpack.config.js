const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack  = require('webpack');


plugins: [
        //清理舊的檔案
        new CleanWebpackPlugin(),
        ]

module.exports = {
    entry: {
        index02:'./src/index.js',
        about:'./src/about.js'
    },               // 入口文件
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename : 'js/[name].js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: './dist'
                    }
                  },
                // 'style-loader',//跟MiniCssExtractPlugin 會衝突所以要關掉
                'css-loader',
                'sass-loader'
            ],
        },
        //babel loader
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,

            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }],
            include: path.resolve(__dirname, 'src'),
        },

      ]

    },
    // module: {
    //     rules: [{
    //         // 格式
    //         test: /\.(sass|scss|css)$/,
    //         //順序是由下到上 sass > css > style
    //         use: [{
    //             loader: MiniCssExtractPlugin.loader,
    //             options: {
    //               publicPath: './dist'
    //             }
    //           },
    //             'css-loader',
    //             'sass-loader'
    //         ],
    //     }]

    // },
    // module: {
    //     rules: [{
    //         // 格式
    //         test: /\.css$/,
    //         //順序是由下到上 css > style
    //         use: [{
    //             loader: MiniCssExtractPlugin.loader,
    //             options: {
    //               publicPath: './dist'
    //             }
    //           },
    //             //'style-loader', 會跟原本的衝突 
    //             'css-loader'
    //         ],
    //     }]
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css"
        }),
        new HtmlWebpackPlugin({
            chunks : ['index02'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index02.html', //來源
            filename : 'index02.html' // 目的地
        }),
        new HtmlWebpackPlugin({
            chunks : ['about'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/about.html', //來源
            filename : 'about.html' // 目的地
        })
    ], 
    resolve: {
        alias: {
           vue: 'vue/dist/vue.js'
        }
      },
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: "./style.css"
    //     })
    // ],             // 對應的插件
    // module: {
    //     rules: [{
    //         // 格式
    //         test: /\.css$/,
    //         //順序是由下到上 css > style
    //         use: [
    //             'style-loader',
    //             'css-loader'
    //         ],
    //     }]
    // }, 
    // module: {},              // 處裡對應模組
    // plugins: [],             // 對應的插件
    // devServer: {},           // 服務器配置
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3030,
        // 指定首頁檔案
        index: 'index02.html',
        open: true
    },
    mode: 'development'      // 開發模式配置 production | development
}