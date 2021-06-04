const path = require("path");
const APP_PATH = path.resolve(__dirname, "../src");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const config = require("./config");
const devMode = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
        main: path.join(__dirname, "../src/index.tsx"),
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
        alias: {
            src: path.resolve(__dirname, "../src/"), // 以 src 表示src目录
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx|js)$/, // Transform all .js and .jsx files required somewhere with Babel
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                              "@babel/preset-env",
                              "@babel/preset-react",
                            ],
                            sourceType: "unambiguous",
                            cacheDirectory: true,
                        }
                    },
                ],
            },
            {
                test: /\.(less|css)$/,
                use: [
                    // 开发环境和生产环境两个loader不能共存
                    devMode
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader, // 有这个MiniCssExtractPlugin会报错
                    "css-loader",
                    "less-loader",
                    "postcss-loader",
                ],
            },
        ],
        // rules: [
        //     {
        //         oneOf: [
        //             {
        //                 test: /\.(html)$/,
        //                 loader: 'html-loader'
        //             },
        //             {
        //                 test: /\.(j|t)sx?$/,
        //                 include: [APP_PATH],
        //                 exclude: /node_modules/,
        //                 use: [
        //                     {
        //                         loader: 'babel-loader',
        //                         options: {
        //                             presets: [
        //                                 '@babel/preset-react',  // jsx支持
        //                                 ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 2 }] // 按需使用polyfill
        //                             ],
        //                             plugins: [
        //                                 ['@babel/plugin-proposal-class-properties', { 'loose': true }] // class中的箭头函数中的this指向组件
        //                             ],
        //                             cacheDirectory: true // 加快编译速度
        //                         }
        //                     },
        //                     {
        //                         loader: 'awesome-typescript-loader'
        //                     }
        //                 ]
        //             }, {
        //                 test: /\.(s*)css$/,
        //                 use: [
        //                     // 开发环境和生产环境两个loader不能共存
        //                     process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // 有这个MiniCssExtractPlugin会报错
        //                     'css-loader',
        //                     'sass-loader',
        //                     'postcss-loader',
        //                 ]
        //             },
        //             {
        //                 test: /\.svg$/,
        //                 use: ['@svgr/webpack']
        //             },
        //             {
        //                 test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
        //                 loader: 'url-loader',
        //                 options: {
        //                     limit: 8 * 1024, // 小于这个大小的图片，会自动base64编码后插入到代码中
        //                     name: 'img/[name].[hash:8].[ext]',
        //                     outputPath: config.assetsDirectory,
        //                     publicPath: config.assetsRoot
        //                 }
        //             },
        //             // 下面这个配置必须放在最后
        //             {
        //                 exclude: [/\.(js|mjs|ts|tsx|less|css|jsx)$/, /\.html$/, /\.json$/],
        //                 loader: 'file-loader',
        //                 options: {
        //                     name: 'media/[path][name].[hash:8].[ext]',
        //                     outputPath: config.assetsDirectory,
        //                     publicPath: config.assetsRoot
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
    plugins: [
        new WebpackBar(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: config.indexPath,
            showErrors: true
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: 'public',
        //         ignore: ['index.html']
        //     }
        // ]),
    ],
    optimization: {},
};
