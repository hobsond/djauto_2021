import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Na from './notAvailable.png'
import gsap, { Power1 } from 'gsap'
import downArrow from './dwnArrow.png'
import xMark from './x-mark.png'
import { ReactComponent as DwnCircle } from './dwnCircle3.svg'
import {ReactComponent as X} from './remove.svg'
const CarItemStyled = styled.div`

padding-top:10%;
padding-bottom: 4%;
@media (min-width:700px){
}
.carItemImg{
    width:98%;
    @media (min-width:700px){
        width:30%;
        height:40vh;

    }
}
.carPrice{
    margin-top: 3%;
    color:red;
}
.detailsBox{
    width:80%;
    /* background: blue; */
    margin:0 auto;
    margin-top:9%;
    height: 3vh;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    @media (min-width:700px){
        margin-top:2%

    }

    .detailsList{
        /* -webkit-clip-path: inset(0 0 100% 0); */
/* clip-path: inset(0 0 100% 0); */
        width:60%;
        margin-left:9%;
        margin-top:1%;
        list-style:none;
        li{
            margin-top:6%;
            display:flex;
            align-items: baseline;
            justify-content: center;
            h3{
                color:red;
                width:40%
            }
            h4{
                margin-left: 5%;
                width:40%;
            }
        }
        text-align:left;
        @media (min-width:700px){
            margin-top:3%;
        }
    }
}
.detailTitleBox{
    display: flex;
    width:70%;
    margin:0 auto;
    justify-content: space-between;
}

.seeMoreCont{
    /* border:solid 1px white; */
    height:5%;
    display: flex;
    justify-content: center;
    padding-top:10%;
    button{
        width:57%;
        font-size:1.4rem;
        background:none;
        border:solid 1px white;
        color:white;
        border-radius:.5rem;
        margin-bottom:4%;
        padding:.56rem .3rem;
    }
}

.dwnCircle{
    position: relative;
    bottom:10%;
    width:60%;
    height:55%;
    /* border:solid red 1px; */
    #path3{
        fill:black;
        /* outline:white; */
    }
}
#xMark{
    width:50%;
    height: 40%;
    /* border:solid black 1px; */
    position: relative;
    left:32%;
    
    #circle_bkg{
        fill:blue;
    }
    @media (min-width:700px){
        width:10%;
    }
}
`


export default function CarItem({
    carImg,
    carTitle,
    details,
    ref,
    watch,
    detailClick,
    item,
    animation
}) {
    const timelineRef = useRef()
    const [init, setInit] = useState(true)
    const [showDetails, setshowDetails] = useState(false)
    const detailRef = useRef()
    const photos = item.photoUrls
    
    useEffect(() => {
        if (init) {
            setInit(false)
            timelineRef.current = gsap.timeline({ defaults: { duration: .6, ease: Power1.easeInOut } })
            timelineRef.current
        .fromTo(
            detailRef.current,
            {
                y:-9
            },
            
            {
                y: 0,
                height: '100%'
            }
            )
            
            .pause()
            
            return
        }
        
    }, [animation, init, watch, timelineRef, detailRef])
    const { info,price } = item
    const { model, year,make } = info
    const title = `${year} ${make} ${model} `
    return (
            <CarItemStyled className='carItem' ref={ref}>
            <img className='carItemImg' src={ photos ? photos[photos.length - 1] :Na} alt={carTitle} />
            <h2 className='carTitle'>{title}</h2>
            <div className='detailsBox' ref={detailRef}>
                    <div className='detailTitleBox'>
                    <h4 className='detailsTitle'>Details</h4>
                    <>
                        {
                            !showDetails ?
                                <div
                                    onClick={() => {
                                        timelineRef.current
                                            .play()
                                                setshowDetails(true)
                                    }}
                                    className='detailsIcon_cont'
                                >
                                    {/* <img className='open-close' src={downArrow} alt='down arrow'/> */}
                                    <DwnCircle className='dwnCircle' style={ {fill:'yellow'}}/>
                                </div>
                                :
                                        <div
                                    onClick={() => {
                                        if (timelineRef) {
                                            
                                        timelineRef.current
                                            .reverse()
                                            .then(() => {
                                                setshowDetails(false)
                                            })
                                        }

                                    }}
                                    className='detailsIcon_cont'
                                >
                                    <X id='xMark'/>

                                </div>
                        }
                    </>
                    
                    </div>
              
                <ul className='detailsList' >
                    {item.mlg ? <li className='detailsList_item' >
                        <h3>Mlg</h3>
                        <h4>{item.mlg}</h4>
                    </li> : null
                    }
                     <li className='detailsList_item' >
                        <h3>Engine</h3>
                        <h4>{info.engine.split(',')[0]}</h4>
                    </li>

                     <li className='detailsList_item' >
                        <h3>Trans</h3>
                        <h4>{info.transmission}</h4>
                    </li>
                     <li className='detailsList_item' >
                        <h3>Price</h3>
                        <h4>{price}</h4>
                    </li>

                </ul>
                <div className='seeMoreCont'>
                <button className='itemSeeMore'>See More</button>


                </div>
                

            </div>
        </CarItemStyled>
    )
}
