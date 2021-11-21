import React from 'react'
import styled from 'styled-components'
import usedArrows from './repeatArrow.png'
import {useHistory} from 'react-router-dom'


const UsedTagComponent = styled.div`
.tagItem{
    z-index: none;
    background-color: lightgray;
    height:fit-content;
    clip-path: polygon(0 0, 0 88%, 50% 100%, 100% 88%, 100% 0);
    border:none;
    outline: none;
    width:85%;
    padding-top:5%;
    padding-bottom: 15%;
    margin:0 auto;
    margin-top:5%;
    border-radius:2% 2% 0 0 ;
  background: #575757;
background: -webkit-radial-gradient(center, #575757, #020A13);
background: -moz-radial-gradient(center, #575757, #020A13);
background: radial-gradient(ellipse at center, #575757, #020A13);
.usedSub{
    #usedTag_h3{
        font-size:1.5rem;
        width:90%;
        margin:0 auto;
         margin-top:5%;
        margin-bottom:8%;

    }
    p{
        /* border:solid white 1px; */
        width:70%;
        margin:0 auto;
        /* text-align: left; */
        font-size:1.4rem;
    }
    button{
        margin-top: 9%;
        height:7vh;
        width:55%;
        border-radius:.2em;
        border:none;
        outline:none;
        background:darkgray;
        color:white;
        font-size:1.2rem;
    }
}


}
@media (min-width:768px){
.tagItem{
    /* height:60vh; */

    .usedSub{
        #usedTag_h3{
            font-size:2.3rem;
        }
        p{
            font-size:1.9rem;
        }
        button{
            width:40%;
            font-size:1.8rem;
        }
    }
}
}
@media (min-width:992px){
    width:40%;
    padding-bottom:5%;
    /* margin:0 auto; */
.tagItem{
    .usedSub{
        #usedTag_h3{
            font-size: 1.5rem;
        }
        p{
            font-size: 1.2rem;
        }
        button{
            font-size:1.2rem;
        }
    }
}
}
`

export default function UsedTags() {
    const {push} = useHistory()
    return (
        <UsedTagComponent>
            <div className='tagItem'>
                <div className="usedSub">

                    <div className='usedSubItem'>
                        <img src={usedArrows} alt="Arrow for used vehicles" />
                    </div>


                    <h3 id='usedTag_h3'>Quality Preowned Vehicles</h3>

                    <div className='usedSubItem'>
                        <p >
                            Quality preowned vehicles available, we offer fair pricing on trade ins and we will work with you and your budget.
                        </p>
                    </div>

                    <button onClick={() => {
                        push('/inventory')
                    }}>View Used</button>
                </div>


            </div>
        
            
        </UsedTagComponent>
    )
}
