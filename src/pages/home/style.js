import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:#212121;

        .modal-content {
            background-color:#2b2b2b;
            color:white;

            .modal-header {
                background: #212121;  
                border:none;   
                
                button.close {
                    color:#fff;
                }
            }

            .modal-footer {
                background: #212121;   
                border:none;            
            }

            input {
                background: #212121;
                border: 1px solid gray;
                color:white;

                &:focus {
                    background: #333;
                    color:#fff;
                }
            }
        }

        #erro {
            margin-bottom:10px;
            color:#d20707;
        }
    }
`;

export const ContainerBody = styled.section`
    margin:0 20px;

    table {
        text-align:center;
        font:normal 13pt 'Arial',sans-serif;

        thead {
            background-color: #212121;
        }

        tbody {
            background-color: #2B2B2B;
        }
    }
`;

export const HeaderBody = styled.div`
    height:80px;
    font:bold 30px 'Arial',sans-serif;
    color:#fff;


    display:flex;
    align-items:center;
    justify-content:space-between;

    input[type="text"] {
        height:50%;
        width:20%;

        &::placeholder {
            font-size:17px;
            height:10px;
        }
    }
`;

export const Buttons = styled.div`
    display:flex;

    button {
        display:flex;
        align-items:center;

        svg {
            margin-right:5px;
        }

        &:first-child {
            margin-right:10px;
        }

        &:last-child {
            margin-left:10px;
        }
    }
`;

