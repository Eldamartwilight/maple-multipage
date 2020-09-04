const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimalCssAssertPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "src/index.jsx"),
    },
    output: {
        filename: "[name].[hash].js",
        publicPath: isDev ? "/" : "",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: path.resolve("public/index.html"),
            inject: "body",
            minify: {
                collapseWhitespace: !isDev,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css"],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "src"),
        hot: true,
    },
    optimization: {
        minimize: !isDev,
        minimizer: !isDev
            ? [new OptimalCssAssertPlugin(), new TerserWebpackPlugin()]
            : [],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    !isDev
                        ? {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                  hmr: isDev,
                                  reloadAll: true,
                              },
                          }
                        : "style-loader",
                    "css-loader",
                ],
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: ["file-loader"],
            // },
        ],
    },
};
