import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
    *,
    *::after,
    *::before {
        font-family: 'Lato', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ul {
        list-style: none;
    }

    li, a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }

    .navbar-mobile-overlay, .card {
        background: ${({ theme }) => theme.body};
    }

    .navbar-mobile-overlay > li, a {
        color: ${({ theme }) => theme.text};
    }

    .drop-shadow {
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);
    }

    .stat-card {
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

        > h1 {
            font-size: 2.2rem;
            font-weight: 300;
        }
    }   

    .button {
        background: none;
        padding: 0.75rem 2rem;
        margin-top: 0.75rem;
        border: 1px solid ${({ theme }) => theme.text};
        font-size: 1rem;

        &:hover {
            cursor: pointer;
            background: ${({ theme }) => theme.text};
            color: ${({ theme }) => theme.body};
            transition: all 0.3s ease-in-out;
        }
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        height: 100vh;
    }
`;

export const lightTheme = {
    body: '#FAFAFA',
    text: '#070707',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
};
  
export const darkTheme = {
    body: '#070707',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
};