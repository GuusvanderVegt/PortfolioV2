module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "primary-dark": "#0d2438",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
