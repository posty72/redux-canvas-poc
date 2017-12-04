const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} = require('webpack');


// Load project config, or default to local project config


// Options
const entryFile = path.join(__dirname, './src/index.js');
const appSrc = path.join(__dirname, './src');
const appHtmlTemplate = path.join(__dirname, './static/index.html');
const appPublic = path.join(__dirname, './static');
const appBuild = path.join(__dirname, './dist');


// Helpers
function generatePlugins() {
    const plugins = [
        new HtmlWebpackPlugin({
            template: appHtmlTemplate
        })
    ];

        // Enable HMR globally
    plugins.push(new HotModuleReplacementPlugin());

    // Prints more readable module names in the browser console on HMR updates
    plugins.push(new NamedModulesPlugin());

    plugins.push(new CleanWebpackPlugin([
        'dist'
    ]));

    return plugins;
}


// Webpack config
module.exports = {
    // TODO: Change the devtool option back to this turnary once the Chrome issues have
    //       been resolved. See https://github.com/webpack/webpack/issues/2145
    devtool: 'source-map', // dev ? 'cheap-module-eval-source-map' : 'source-map',

    entry: entryFile,

    output: {
        path: appBuild,
        filename: '[name].[hash].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    'plugins': [
                        'transform-object-assign',
                        'transform-object-rest-spread'
                    ],
                    'presets': [
                        'env'
                    ]

                }
            }
        ]
    },

    plugins: generatePlugins(),

    resolve: {
        extensions: ['.css', '.js', '.json', '.jsx', '.scss'],

        modules: [
            appSrc,
            appPublic,
            'node_modules'
        ],
    },

    resolveLoader: {
        // Ensure loaders are loaded from front-end-scripts directory
        modules: [
            'node_modules'
        ]
    },

    performance: {
        // Disable 250kb JavaScript entry file warnings
        hints: 'warning'
    },

    devServer: {
        // Add GZip compression
        compress: true,

        // Use /static/ as the default content base
        contentBase: appPublic,

        // index.html will catch all routes (allowing Router to do it's thing)
        historyApiFallback: true,

        // Hot module replacement (only in 'dev' mode)
        hot: true,

        // Enable HTTPS and HTTP/2
        https: false,

        port: 9000,

        // Hide the webpack bundle information
        noInfo: true,

        // Match public path with output path
        publicPath: '/',

        watchOptions: {
            // Don't actively watch the node_modules folder to decrease CPU usage
            ignored: /node_modules/
        }
    }
};
