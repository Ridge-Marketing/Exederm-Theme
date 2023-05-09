
module.exports = {
  purge: [],
  darkMode: false,
  prefix: 'tw-',
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '48%': '48.8%',
        '3/5': '60%',
        '4/5': '80%',
        '1/8': '12.5%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '9/16': '56.25%',
        '4/3': '133.33333%',
        '16/9': '177.77778%',
        'full': '100%',
        '1/100': '1%',
        '7/100': '7%',
        '1/20': '5%',
        '0.25': '0.25%',
        '1px': '1px',
        '2px': '2px',
        '250px': '15.625rem',
        '264px': '16.5rem',
        '294px': '18.375rem',
        '300px': '18.75rem',
        '340px': '21.25rem',
        '376px': '23.5rem',
        '400px': '25rem',
        '438px': '27.375rem',
        '456px': '28.5rem',
        '466px': '29.125rem',
        '480px': '30rem',
        '525px': '32.8125rem',
        '552px': '34.5rem',
        '690px': '43.125rem',
        'contain': 'calc(50vw - 668px)'
      },
      colors: {
        'green': '#3E9A76',
        'hover-green': '#267B59',
        'tan': '#F9F4EB',
        'lightblue': '#e5f1f8',
        'mediumblue': '#E3F2F9',
        'aliceblue': '#F4FAFC',
        'gray-97': '#979797',
        'matterhorn': '#535353',
        'footer-gray': '#F6F5F4',
        'gainsboro': '#E3E3E3'
      },
      fontSize: {
        '50px/54px': ['3.125rem', '1.08'],
        '32px/40px': ['2rem', '1.25'],
        '26px/33px': ['1.625rem', '1.269'],
        '22px/28px': ['1.375rem', '1.273'],
        '20px/25px': ['1.25rem', '1.25'],
        '18px/24px': ['1.125rem', '1.333'],
        '16px/24px': ['1rem', '1.4'],
        '18px/36px': ['1.125rem', '2'],
        '45px/56px': ['2.8125rem', '1.244'],
        '20px/29px': ['1.25rem', '1.45'],
        '28px/34px': ['1.75rem', '1.214'],
        '14px/20px': ['0.875rem', '1.429'],
        '12px/16px': ['0.75rem', '1.333'],
        '16px/22px': ['1rem', '1.375'],
        '36px/42px': ['2.25rem', '1.167'],
        '24px/44px': ['1.5rem', '1.833'],
        '24px/36px': ['1.5rem', '1.5'],
        '12px/20px': ['0.75rem', '1.667'],
        '12px/13px': ['0.75rem', '1.0833'],
        '14px/34px': ['0.875rem', '2.4285'],
        '14px/25px': ['0.875rem', '1.7857']
       },
       fontFamily: {
         'encode-sans': ['Encode Sans', 'sans-serif'],
         'open-sans': ['Open Sans', 'sans-serif']
       },
       boxShadow: {
        '0-2-6-20': '0 2px 6px rgba(0,0,0,0.2)',
        '0-3-6-16': '0 3px 6px rgba(0,0,0,0.16)',
        '0-3-6-20': '0 3px 6px rgba(0,0,0,0.2)',
        '0-2-6-33': '0 3px 6px rgba(0,0,0,0.33)',
        '1-4-6-20': '1.3px 3.7px 6px rgba(0,0,0,0.2)',
        '0-5-13-(-4)-42': '0px 5px 13px -4px rgba(0,0,0,0.42)',
        '0-2-9-19': '0 2px 9px rgb(0,0,0,0.19)',
        '0-2-12-40': '0 2px 12px rgb(0,0,0, 0.4)',
        '0-2-2-25': '0 2px 2px rgba(0,0,0,0.25)',
        '0-0-7-33': '0px 0px 7px rgba(0, 0, 0, 0.338587)'
       },
       maxWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '45': '45%',
        '55': '55%',
        '3/5': '60%',
        '4/5': '80%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '9/16': '56.25%',
        '65': '65%',
        '1520px': '95rem',
        '1336px': '83.5rem',
        '300px': '18.75rem',
        '420px': '26.25rem',
        '80px': '5rem',
        '580px': '36.25rem'
       },
       minWidth: {
         '200px': '200px',
         '343px': '343px'
       },
       minHeight: {
        '256px': '16rem',
        '100px': '6.25rem',
        '180px': '11.25rem',
        '120px': '7.5rem',
        '60px': '3.75rem'
       },
       gridTemplateColumns: {
         '4/6': "40% 60%",
         '6/4': '60% 40%'
       },
       lineHeight: {
         'em': '.1em'
       },
       backgroundImage: theme => ({
        'about-irris': "url('https://cdn.shopify.com/s/files/1/0524/5622/7007/files/about-irritants-hero.jpg?v=1612843855')",
        'checkmark': "url('https://cdn.shopify.com/s/files/1/0524/5622/7007/files/checkmark.png?v=1613607256')"
       }),
       backgroundPosition: {
         'position-full': '100%'
       },
       transitionProperty: {
         'width': 'width'
       }
    },
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [],
}