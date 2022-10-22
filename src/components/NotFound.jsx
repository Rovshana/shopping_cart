import React from 'react'
import { Error, NotFoundDiv, Paragraph } from '../styleComponents/NotFound.styled'

export function NotFound(props) {
    

    return (
        <NotFoundDiv>
            <Error>404</Error>
            <Paragraph>Opps the page is not exist :(</Paragraph>
        </NotFoundDiv>
    )
}
