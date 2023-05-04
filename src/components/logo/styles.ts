import styled from 'styled-components';

export const StyLogo = styled.div`
    height: 55px;
    width: 55px;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 200;
    position: relative;

    &.loading-page {
        font-size: 200px;
        margin: 20px;

        .react-icon{
            padding: 80px;
        }
    }

    .react-icon {
        position: absolute;
        height: 98%;
        width: 98%;
        padding: 5px;
        background: ${({ theme }) => theme.background};
        border-radius: 50%;
        transition: opacity ease-in 0.2s;

        -webkit-animation: rotating 8s linear infinite;
        -moz-animation: rotating 8s linear infinite;
        -ms-animation: rotating 8s linear infinite;
        -o-animation: rotating 8s linear infinite;
        animation: rotating 8s linear infinite, hide 10s linear infinite;
    }


    /* Safari and Chrome */
    @-webkit-keyframes rotating {
        from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes hide {
        0% {
            opacity: 1;
        }
        22%{
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
        85%{
            opacity: 0;
        }
        88%{
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
`;