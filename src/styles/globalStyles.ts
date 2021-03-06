import { createGlobalStyle } from 'styled-components'
import 'react-calendar-heatmap/dist/styles.css'

export default createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%
  }

  body {
    background: var(--primary)
  }

  *, button, input {
    border: none;
    cursor: pointer;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black)
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  :root {
    --primary: #fff;
    --black: #1b1f23;
    --gray: #586069;
    --gray-light: #6a737d;
    --gray-dark: #24292e;
    --orange: #f9826c;
    --logo: #fff;
    --footer-icon: #c6cbd1;
    --header: #24292e;
    --username: #666;
    --search: rgba(255, 255, 255, 0.13);
    --search-placeholder: hsla(0, 0%, 100%, .75);
    --icon: #6a737d;
    --link: #0366d6;
    --border: #e1e4e8;
    --ticker: rgba(209, 213, 218, .5);
    
    --calendar-scale-0: #ebedf0;
    --calendar-scale-1: #9be9a8;
    --calendar-scale-2: #3fc463;
    --calendar-scale-3: #30a14e;
    --calendar-scale-4: #216e3a;
    --javascript: #f1e05a;
    --typescript: #2b7489;
    --other-language: #8257e5;
  }
`
