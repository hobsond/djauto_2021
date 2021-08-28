import React from 'react'
import styled from 'styled-components'
import bkg from './bkg1.jpeg'

const CtaComponent = styled.div`
height:90vh;
background-image:url(${bkg});
background-repeat:no-repeat;
background-size:cover;
background-position:center;
background-position-x:30%;
/* margin-top: -5%; */
padding-top:16%;
text-align: left;
display: flex;
flex-direction: column;
align-items: center;
#shadowBox{
    width:90vw;
    height:60vh;
    background:rgba(0,0,0,.2);
    position: absolute;
    left:5%;
    top:22%;
    z-index:- 1;
    pointer-events:none;
    mix-blend-mode:darken;
}
.infoCont{

    width:100%;
    display:flex;
    justify-content: center;
    z-index: 100;
    #info1{
font-size: 1.2rem;
margin-bottom:10%;
    }
    #info2{
        width:75%;
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 2%;
    }
    #info3{
        width:70%;
        font-size: 1.6rem;
    }

}
#ctaBtn{
    margin-top:2vh;
    height: 7vh;
    width:70vw;
    background:red;
    color:white;
    border:none;
    outline:none;
    font-size:1.4rem;
    margin-left:8%;
}

@media (min-width: 768px) {
    .infoCont{
        justify-content: flex-start;
        #info1{
            margin-left: 14%;
        }
        #info2{
            margin-left: 14%;
            text-align: left;
            width:90%;
            font-size: 4rem;
        }
        #info3{
            margin-left:15%;
            font-size: 2rem;
            /* border:solid 1px white; */
            width:80%;
        }
    }
    #ctaBtn{
        width:39vw;
        margin-left: 65%;
    }
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
    padding-top:7%;
    #ctaBtn{
        margin-top:5vh;
        width:24vw;
        margin-left: 70vw;
    }

}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { }


`
export default function Cta() {
    return (
        <CtaComponent>
          {  /*========================*/}
            
            <div id='infoItems'>

            <div className='infoCont'>
                <h4 id='info1'>Financing options available </h4>
            </div>

            <div  className='infoCont'>
                <h2 id='info2'> Where Budget <br/> Meets Quality</h2>
            </div>

            <div  className='infoCont'>
                <p id='info3'>
                    Shop the best quality used vehicles that can fit any budget. We have new vehicles arriving weekly and sales events happening all of the time. Check out our current inventory and contact us for us any questions you may have.
                </p>
                </div>
                
            </div>


            <div>
                <button id ='ctaBtn'>View Inventory</button>
            </div>

            {/* <div id='shadowBox'></div> */}

        </CtaComponent>
    )
}
