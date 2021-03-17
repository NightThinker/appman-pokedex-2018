module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      psychic: "#f8a5c2",
      fighting: "#f0932b",
      fairy: "#c44569",
      normal: "#f6e58d",
      grass: "#badc58",
      metal: "#95afc0",
      water: "#3dc1d3",
      lightning: "#f9ca24",
      darkness: "#574b90",
      colorless: "#FFF",
      fire: "#eb4d4b",
      black: '#000',
      shadow: {
        card: {
          DEFAULT: '#d5d6dc',
          hover: '#aeaeae',
        },
        levelTube: '#d4d4d4',
        btnBar: '#d9333387',
        modal: '#474444',
      },
      background: {
        card: '#f3f4f7',
        levelTube: {
          DEFAULT: '#e4e4e4',
          value: '#f3701a'
        },
        btnBar: '#ec5656',
        modal: '#fff',
        modalOutside: '#000000a3',
      },
      color: {
        btn: '#dc7777',
        btnBar: '#fff'
      },
      border: {
        search: '#e6e6e6'
      }
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
