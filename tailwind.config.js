/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./members/*.hbs",
        "./partials/*.hbs",
        "./author.hbs",
        "./default.hbs",
        "./error.hbs",
        "./index.hbs",
        "./page.hbs",
        "./post.hbs",
        "./tag.hbs",
    ],
    theme: {
        fontFamily: {
            sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            serif: 'MaruBuri, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
        },
        extend: {},
    },
    plugins: [],
};
