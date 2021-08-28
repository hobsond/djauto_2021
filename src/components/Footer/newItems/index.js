import React,{useEffect,useState,useRef,createRef} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CarItem from './CarItem'

const NewInvCont = styled.div`
#carItemCont{
    @media (min-width:992px){
        display: flex;
        flex-wrap:wrap;
        width:80%;
        margin:0 auto;
        justify-content: space-evenly;
        padding-top:3%;
        .carItem{
            width:40%;
            /* border:solid black  1px; */
            margin-bottom: 5%;
            /* margin-right:5% */

        }
    }

}
`

export default function NewInventory() {

    const [init,setInit] = useState(true)
    const detailsRefs = useRef()
  const url = process.env.REACT_APP_DBURL

    // detailsRefs.current = data.map(i => createRef())
  
    // const [showDetails, setShowDetails] = useState(data.map(i => false))
    const [data, setData] = useState([])
    useEffect(() => {
        if (init) {
            setInit(false)
            axios.get(`${url}/newItems`)
                .then(i => setData(i.data))
            .catch(err=>console.log(err))

            return
        }

    }, [init])
    
    return (
        <NewInvCont>
            <h1>New Inventory</h1>
            <p>New cars are added weekly <strong >Click Here</strong> to sign up for our email list</p>
            <div id='carItemCont'>

            {
                data.map((i, v) => {

                    return (
                        <CarItem
                            item={i}
                        />
             
                    )
                    
                })
                }
            </div>
                
        </NewInvCont>
    )
}
