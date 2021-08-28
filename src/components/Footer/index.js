import React from 'react'
import styled from 'styled-components'
import NewItems from './newItems'
import ContactFooter from './contact'

const Footer = styled.footer`
min-height:100Vh;
background: white;

`

export default function index() {
    return (
        <Footer>
            <NewItems />
            <ContactFooter/>
            
        </Footer>
    )
}
