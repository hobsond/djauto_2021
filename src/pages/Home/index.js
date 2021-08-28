import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Cta from './Cta'
import CompanyInfo from './CompanyInfo'

const HomeContainer = styled.div`
overflow-y: scroll;
height:fit-content;
`
export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <HomeContainer style={{ color: "white" }}>
                <Cta />
                <CompanyInfo/>
            </HomeContainer>
        )
    }
}
