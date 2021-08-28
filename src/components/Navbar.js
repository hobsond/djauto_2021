import React,{useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import gsap, { Power0 } from 'gsap'
import {useHistory} from 'react-router-dom'
import hamIcon from './hamburger.png'
import cancel from './cancel.png'

const Nav = styled.nav`
background-color:white;
/* height:5%; */
z-index: 200;
position: sticky;
top:0;
left:0;
.navBoxs{
display:flex;
    justify-content: center;
    align-items: center;
}
#notMobileDisplay{
    display: none;

}
#titleBox{
    margin-left: 2%;
    /* background-color: yellow; */
}
.navItem{
    /* margin-right:10%; */
    margin-bottom:5%;
    font-size:1.4em;
}
#itemCont{
    margin-right:10%;
}
 .menuIcon{
    width:10%;
    /* border:solid 1px black */
}
#iconCont{
display: flex;
justify-content: flex-end;
   
}
#navDropDown{
    background:white;
    clip-path: inset(0 0 100% 0);
    height: 0;
    z-index: 200;
}
#closeIcon{
    width:5%;
    margin-right:3%;
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
        /* padding-bottom:2%; */

    height:10Vh;
      #mobileDisplay{
        display: none;
    }
    #notMobileDisplay{
        /* height:5vh; */
        display:flex;
        /* background:yellow; */
        width:46%;

        /* padding-bottom: 5%; */

    }
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .navItem{
        margin:0;
        margin-right: 10%;
    }
    #itemCont{
        margin:0;
    }

    
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    
 }
`
const DropComponent = React.forwardRef((props,ref) => {
    const [initial, setInitial] = useState(true)
    
    useEffect(() => {
        if (initial) {
            setInitial(false)
            return
        }
        if (props.watch) {
            props.animation.play()
        }
        else {
            props.animation.reverse();
        }
    }, [props.watch, props.animation, initial])
    const { push } = useHistory()
 
    
    return <div ref={ref} className={props.className} id={props.id}>
        <h3 onClick={() => {
            push('/')
            props.setShow(false)
        }} className='navItem'>Home</h3>
        <h3 onClick={() => {
            push('/inventory')
            props.setShow(false)

        }} className='navItem'>Inventory</h3>
        <h3 onClick={() => {
            push('/about')
            props.setShow(false)

        }}
            className='navItem'>About</h3>
        <h3
            onClick={() => {
                push('/contact')
                gsap.to(window,{scrollTo:'.contactData' })
            props.setShow(false)

            }}
            className='navItem'>Contact</h3>

    </div>
    
    
})
export default function Navbar() {
    const [showDrop, setShowDrop] = useState(false)
    const [init,setInit] = useState(true)
    const dropdownRef = useRef()
    const droptimeline = useRef()
    const closeIcon = useRef()
    const navRef = useRef()
    droptimeline.current = new gsap.timeline({defaults:{ease:Power0.easeInOut,duration:.5}})
if(!init){
        droptimeline.current
            .fromTo(dropdownRef.current,
                {
                    height: 0,
                    opacity:0
                },
                {
                    clipPath: "inset(0 0 0 0)",
                    height:'100%',
                    opacity: 1
                              

                })
        droptimeline.current.pause()
        
    }
    useEffect(() => {
        if (init) {
            setInit(false)
            return
        }
        
        
    }, [init])

    

    function dropAnim() {
       setShowDrop(true)
    }
    const { push } = useHistory()
    return (
        <Nav ref={navRef} id='nav'>
            <div id='titleBox' className={'navBoxs'}>
                <h1>Dj's Auto Sales</h1>
            </div>
            <div id='notMobileDisplay'>
            <div id='itemCont' className={'navBoxs'}>
                <h3 onClick={()=>push('/')} className='navItem'>Home</h3>
                <h3  onClick={()=>push('/inventory')} className='navItem'>Inventory</h3>
                <h3  onClick={()=>push('/about')} className='navItem'>About</h3>
                <h3  onClick={()=>push('/contact')}  className='navItem'>Contact</h3>
                </div>
            </div>
                

            <div id='mobileDisplay'>
                
            <div id='iconCont'>
                {
                    !showDrop ?
                        <img className='menuIcon' onClick={dropAnim} id='hamIcon' src={hamIcon} alt='More Icon' />
                        :
                            <img ref={closeIcon} id='closeIcon' className='menuIcon' src={cancel} alt='close menu' onClick={() => {
                                setShowDrop(false)
                                // droptimeline.current.reverse()
                                // .then(()=>setShowDrop(false))
                        }}/>
                }
            </div>
         
                <DropComponent
                    ref={dropdownRef}
                    id={'navDropDown'}
                    watch={showDrop}
                    animation={droptimeline.current}
                    setShow = {setShowDrop}
                />
           </div>
                
        </Nav>
    )
}
