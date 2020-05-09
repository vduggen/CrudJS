import React from 'react';

import { Container, Title, ListLinks } from './style';

export default function Header() {
    return(
        <Container>
            <Title>CRUD</Title>

            <ListLinks>
                <li><a href="# ">Home</a></li>
            </ListLinks>
        </Container>
    )
}