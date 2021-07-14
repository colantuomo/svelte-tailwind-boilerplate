module.exports = {
  // mode: "jit",
  purge: {
    enabled: true,
    mode: "all",
    content: ["./public/index.html", "./src/**/*.svelte"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
