module.exports = {
    "env": {
        "browser": true,
        "es2022": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": { "jsx": true },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [],
    "extends": ["plugin:react/recommended"],
    "overrides": [
    ],
    "rules": {
        "semi": "error",
        "quotes": "error",
        "no-undef": "error",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off"
    }
};
