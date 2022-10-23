/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],

    theme: {
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 24,
            '2xl': 32
        },
        colors:{
            transparent: 'transparent',
            black: '#000000',
            white: '#FFFFFF',

            gray:{
                100: '#E1E1E6',
                200: '#C4C4CC',
                500: '#7C7C7C',
                600: '#7C7C8A',
                800: '#202024',
                900: '#1A1A1A'
            },

            cyan:{
                100: '#93DDF1',
                300: '#61DAFB',
            }
        },
        extend: {
            fontFamily:{
                sans: 'Inter, sans-serif'
            }
        },
    },
    plugins: [],
};
