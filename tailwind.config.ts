/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                orpheus: ['Orpheus Pro', 'serif'],
                garamond: ['var(--font-eb-garamond)', 'serif']
            },
        },
    },
    plugins: [],
}
