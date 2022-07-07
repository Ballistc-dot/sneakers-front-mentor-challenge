/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                zinc: {
                    150: "#f7f8fd"
                },
                gray: {
                    100: "#F2F2F2",
                    200: "#D9D9D9",
                    300: "#7b7b7b",
                    400: "#333333",
                    500: "#262626",
                    600: "#1f1f23",
                    700: "#0D0D0D"

                },
                blue: {
                    300: "#4EA8DE",
                    400: "#1E6F9F"
                },
                purple: {
                    400: "#8284FA",
                    600: "#5E60CE"
                },
                orange: {
                    100: "#fdefe2",
                    250: "#ffac6a",
                    300: "#e57c2e",
                    400: "#ff7d1b"
                }

            },
            width: {

            },
            height: {


            },
            fontFamily: {
                KumbhSans: ["Kumbh Sans", "sans-serif"]
            },
            dropShadow: {
                orange: '0px 4px 10px #e57c2e'
            },
            animation: {
                toggleIn: "toggleIn 1s 1"
            },
            keyframes: {
                toggleIn: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 1
                    }
                }
            }
        },
    },
    plugins: [],

};