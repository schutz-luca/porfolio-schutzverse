import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { devices } from './devices';

export default createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: -webkit-fill-available;
    -ms-overflow-style: scrollbar;
    background: black;
    background: ${({ theme }) => theme.background};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font: 400 1rem ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.text};
    transition: ${({ theme }) => theme.transition};

    @media ${devices.laptopL} {
      font-size: 0.8rem;
    }
  }

  section {
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8rem;

    @media ${devices.heightBreak} {
      display: block;
      height: unset;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  img {
    max-width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    -webkit-box-shadow: none;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: 6.25rem;

    @media ${devices.laptopL} {
      font-size: 5rem;
    }

    @media ${devices.mobileL} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 40px;
  }

  a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      font-weight: 600;

      &.active {
        color: ${({ theme }) => theme.primary};
      }
  }

  a, li {
    margin-bottom: 0;
    transition: ${({ theme }) => theme.transition};

    &:hover, &:focus{
      transform: translateY(-3px);
    }
  }

  ul {
    list-style: none;
  }

  div.flex {
    display: flex;
    flex-wrap: wrap;
  }

  @-ms-viewport {
    width: device-width;
  }

    *::selection {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.colors.white};
    }

    *::-webkit-scrollbar {
      width: 0.4rem;
      @media ${devices.tablet}{
        width: 0.2rem;
      }
    }

    *::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.darkGray}ee;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 40px;
      background-color: ${({ theme }) => theme.colors.white}30;
      transition: background-color 0.3s ease-out;
    }
    
    .progress {
      position: fixed;
      left: 0;
      right: 0;
      height: 5px;
      min-width: 10px;
      background: ${({ theme }) => theme.progress};
      top: 0;
      z-index: 9;
    }
`;