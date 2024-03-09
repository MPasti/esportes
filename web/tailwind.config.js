/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx, ts}", "./index.html"],
  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
        "colorful-gradient":
          "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 35.94%, #E1D55D 94.57%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
