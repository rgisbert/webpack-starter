const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development', // development or production
    output: { clean: true },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: [ "style-loader", "css-loader" ],
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, "css-loader" ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin( {
            template: './src/index.html',
            filename: './index.html',
            inject: 'body',
        } ),
        new MiniCssExtract( {
            filename: '[name].css',
            ignoreOrder: false,
        } ),
        new CopyPlugin( {
            patterns: [
                { from: "src/assets/", to: "assets/" },
            ]
        } ),
    ],
    devServer: {
        port: 'auto',
        open: {
            app: {
                name: 'Google Chrome',
            },
        },
    },
};
