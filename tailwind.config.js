/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				green: "#1db954",
				black_base: "#121212",
				black_primary: "#191414",
				black_secondary: "#171818",
				light_black: "#282828",
				primary: "#FFFFFF",
				secondary: "#b3b3b3",
				gray: "#535353",
			},
			gridTemplateColumns: {
				"auto-fill-cards": "repeat(auto-fill, minmax(200px, 1fr))",
			},
		},
	},
};
