import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import CarItem from '../../components/Footer/newItems/CarItem'

const InventoryPage = styled.div`
min-height: 100vh;
color:white;
`


const dbUrl ="http://localhost:4400/user"

export default class Inventory extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props)
        this.state = {
            inventory : []
        }
        
    }

    componentDidMount() {
    axios.get(`${dbUrl}/inventory`)
        .then(res => {
            this.setState({inventory : res.data})
        })
            .catch(err => console.log(err))
  
    }

    render() {

        return (
            <InventoryPage>
                <div>
                    <h1>Inventory</h1>
                    <p> New Inventoty is added every thursday and friday stay up to date with us. <strong>Click Here</strong> </p>
                </div>
                <div className='inventoryItems_cont'>
                    {
                        this.state.inventory.map(i => {
                            return <div>
                                <CarItem
                                    details={[1, 2]}
                                    carImg={i.photoUrls[i.photoUrls.length - 1]}
                                    item = {i}
                                />
                            </div>
                        })
                    }

                </div>
            </InventoryPage>
        )
    }
}
