tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#C778DD',
          white: '#fff',
          black: '#000',
          gray: '#ABB2BF',
          bg: '#282C33'

        },
        fontFamily: {
          fira : ['Fira Code', 'monospace'],
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
          
        },
        container: {
            center: true,
            padding: {
              md: '1rem'
            },
        },
        spacing: {
          '1': '8px',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
        }
      }, 
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      }
    }
  }