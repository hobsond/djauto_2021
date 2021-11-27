import React,{useRef,useEffect,useState} from 'react'
import styled from 'styled-components'
import bkg from './bkg1.jpeg'
import { useHistory, } from 'react-router-dom'
import gsap from 'gsap'

const CtaComponent = styled.div`
height:fit-content;
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
color:red;
margin-bottom:2%;
    }
    #info2{
        width:75%;
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 2%;
    }
    #info3{
        width:90%;
        margin:0 auto;
        text-align: center;
        font-size: 1.1em;
        margin-bottom: 10%;
      
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
            font-size: 2.5rem;
        }
        #info3{
            margin-left:15%;
            font-size: 2rem;
            /* border:solid 1px white; */
            text-align: left;
            width:100%;
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

  @media (min-width: 1200px) {
  
    .infoCont{
        #info3{
            width:60%
        }
    }
}

`
export default function Cta() {
    const { push } = useHistory()
    const info1 = useRef()
    const info2= useRef()
    const info3 = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl
        .from(`#info1`,{opacity:0,x:-100})
        .from(`#info2`,{delay:.5,opacity:0,x:-100},)
        .from(`#info3`,{opacity:0,x:100},'-=.6')
        .from(`#ctaBtn`,{opacity:0,y:50})
    },[])
    return (
        <CtaComponent>
          {  /*========================*/}
            
            <div id='infoItems'>

            <div className='infoCont'>
                    <h4
                        ref={info1.current}
                        id='info1'>Financing options available </h4>
            </div>

            <div  className='infoCont'>
                    <h2
                        ref={info2}
                        
                        id='info2'> Where Budget <br /> Meets Quality</h2>
            </div>

            <div  className='infoCont'>
                    <p id='info3'
                        ref={info3}
                        
                    >
                    Shop the best quality used vehicles that can fit any budget. We have new vehicles arriving weekly and sales events happening all of the time. Check out our current inventory and contact us for us any questions you may have.
                </p>
                </div>
                
            </div>


            <div>
                <button
                    onClick={()=>push('/inventory')}
                    id='ctaBtn'>View Inventory</button>
            </div>

            {/* <div id='shadowBox'></div> */}

        </CtaComponent>
    )
}
