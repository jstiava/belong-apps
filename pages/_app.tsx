import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '@/style.scss';
import { LocalizationProvider } from "@mui/x-date-pickers";
import type { AppProps } from "next/app";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, lighten, ThemeProvider } from "@mui/material";
import { Source_Sans_3 } from "next/font/google";

export const ss3 = Source_Sans_3({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        theme={lightTheme}
      >


        <LocalizationProvider dateAdapter={AdapterDayjs}>

          <Header />
          <div id="content" 
           className="column center"
          style={{
            width: "100%",
            backgroundColor: '#fff',
            color: '#000',
            minHeight: "100vh",
            padding: "5rem 1rem"
          }}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}


const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0fd9c1",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 700,
          variants: [
            {
              props: { variant: "outlined", color: "error" },
              style: {
                '&:hover': {
                  backgroundColor: "#FCEEEE"
                },
                backgroundColor: "#F9DDDD"
              }
            },
            {
              props: { variant: "text", color: "error" },
              style: {
                '&:hover': {
                  backgroundColor: "#FCEEEE"
                },
                backgroundColor: "#F9DDDD"
              }
            },
            {
              props: { color: 'light' },
              style: {
                '&:hover': {
                  backgroundColor: lighten("#0fd9c1", 0.8) || "#ffffff"
                },
                backgroundColor: lighten("#0fd9c1", 0.9) || "#ffffff"
              }
            },
            {
              props: { variant: 'invert' },
              style: {
                '&:hover': {
                  backgroundColor: lighten("#000000", 0.2),
                  color: "#0fd9c1"
                },
                backgroundColor: '#000000',
                color: "#0fd9c1"
              }
            },
            {
              props: { variant: 'invert', disabled: true },
              style: {
                '&:hover': {
                  backgroundColor: lighten("#000000", 0.2),
                  color: "#0fd9c1"
                },
                backgroundColor: '#00000025',
                color: '#000000',
              }
            }
          ]
        }
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          borderRadius: '0.25rem',
        },
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem"
        }
      }
    }
  },
  typography: {
    h3: {
      fontWeight: 800
    },
    h4: {
      fontWeight: 800
    },
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: "0.015rem"
    },
    fontFamily: [
      ss3.style.fontFamily,
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 425,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920
    },
  },
});