module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                lg: "2rem",
            },
        },

        extend: {
            colors: {
                "primary-dark": "#0d2438",
            },
            screens: {
                // mobile: "480px",
                tablet: "481px",
                laptop: "769px",
                desktop: "1025px",
            },

            gridTemplateRows: {
                auto: "auto",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
