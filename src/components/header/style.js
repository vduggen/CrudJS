import styled from 'styled-components';

export const Container = styled.div`
    height:10vh;
    background:#333;
    padding:0 5%;

    display:flex;
    align-items:center;
`;

export const Title = styled.h1`
    font:normal 40px Arial;
    color:#fff;  
    `;

export const ListLinks = styled.ul`
    display:flex;
    flex-direction:row;
    margin-left:auto;

    a {        
        text-decoration:none;
        color:#fff;
        transition:all .4s;
        margin:0 10px;
        font:normal 18px Arial;
        padding-bottom:5px;
    
        &:hover {
            color: #bdbdbd;
        }
    }
`;
