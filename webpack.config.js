const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: "./app/js/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: path.resolve(__dirname, "assets")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-0"]
                }
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "app"),
        port: 9999,
        host: "localhost"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
