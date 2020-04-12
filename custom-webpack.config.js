var MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
new MergeJsonWebpackPlugin({
    "files": [
        "./src/recipes/file1.json",
        "./src/recipes/file2.json",
        "./src/recipes/file3.json"
    ],
    "output": {
        "fileName": "./dist/recipes.json"
    }
});