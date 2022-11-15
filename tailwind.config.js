/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'white': '#ffffff',
      'lightblue': '#3E9FE3',
      'blue':'#107EC3',
      'hoverblue':'#0C74BD',
      'yellow':'#FFA900',
      'lightyellow':'#fdf3de',
      'red':'#FF0000',
      'imagebg':'#eeeefa',
      'logobg':'#C8C8C8',
      'worktext':'#6F7CB2',
      'linearfrom':'#1d8fe0',
      'linearto':'#8cc9f5',
      'hr':'#A3CFEE',
      'accborder':'#A3CFEE',
      'azure':'	#ebf5ff',
      'bordergray':' #ededeb',
      'black':'#000000',
      'graytext':'#848199'
    },
    extend: {},
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      xxl:'1536px'

    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
  plugins: [],
}


