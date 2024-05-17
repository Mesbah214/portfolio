/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'lg-screen': '1124px',
                'custom-small': '600px'
            },
            backgroundImage: {
                'hero-pattern': "url(./assets/images/pattern-rings.svg)"
            },
            fontSize: {
                html: '62.5%',
                fs88: '8.8rem',
                fs72: '7.2rem',
                fs48: '4.8rem',
                fs40: '4rem',
                fs32: '3.2rem',
                fs24: '2.4rem',
            },
            fontFamily: {
                sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'bg-body': 'hsl(0, 0%, 8%)',
                'bg-contact': 'hsl(153, 71%, 59%)',
                'accent': 'hsl(0, 0%, 14%)',
                'text-primary': 'hsl(0, 100%, 100%)',
                'text-secondary': 'hsl(0, 0%, 85%)',
                'invalid': '#ff6f58'
            },
        },
    },
    plugins: [],
    variants: {
        fill: ['hover', 'focus']
    }
}
