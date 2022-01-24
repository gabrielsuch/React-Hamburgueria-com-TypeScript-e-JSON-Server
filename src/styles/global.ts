import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `

    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-button: #219653;

        --color-secondary: #EB5757;

        --color-white: #FFFFFF;

        --gray-0: #F5F5F5;
        --gray-50: #999999;
        --gray-100: #E0E0E0;
        --gray-300: #828282;
        --gray-400: #BDBDBD;
        --gray-600: #333333;

        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;

        --font-size-h1: 26px;
        --font-size-h2: 22px;
        --font-size-h3: 18px;
        --font-size-headline: 16px;
        --font-size-body: 14px;
        --font-size-caption: 12px;

        --font-family-default: 'Inter', sans-serif;
    }

    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        background-color: var(--color-white);
    }
    body{
        font-size: var(--font-size-body);
        font-family: var(--font-family-default);
    }
    h1{
        font-size: var(--font-size-h1);
    }
    h2{
        font-size: var(--font-size-h2);
    }
    h3{
        font-size: var(--font-size-h3);
    }
`

export default GlobalStyle