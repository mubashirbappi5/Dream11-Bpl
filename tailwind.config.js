/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColor:'#E7FE29',
        head1:'#131313B3',
        head2:'#FFFFFFB3',
        head3:'#FFFFFF99'
        
      },
      backgroundImage:{
        btnimage1: 'linear-gradient(to right, #BF5E82 10%, #F1BC5B 90%)',
        btnimage2: 'linear-gradient(to right, #F1BC5B 10%, #BF5E82 90%)',
        imagebg:"url(https://i.ibb.co.com/KWG2MtF/bg-shadow.png)",

      }
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],

}

