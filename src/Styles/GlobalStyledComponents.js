import styled from "styled-components";

export const GlobalButton = styled.button `
    border: none;
    border-radius: 15px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    width: auto;
    max-width: 400px;
    transition: background-color 0.3s ease;


    @media only screen and (max-width: 768px){
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
`;

export const AGlobal = styled.a`
    text-decoration: none;
    color: rgb(255, 187, 0);
    transition: color 0.6s ease;

    &:hover{
        text-decoration: none;
        color: blue;
    }
`;