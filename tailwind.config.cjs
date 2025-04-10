module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color:{
        main:"var(--color-main)",
        second:"var(--color-second)"
      },
      screens: {
        sm: '370px',
        sml:'500px',
        md: '667px',
        mdl: '778px',
        lg: '1024px',
        xl: '1280px',
      },
  
    },
  },
  plugins: [],
};
