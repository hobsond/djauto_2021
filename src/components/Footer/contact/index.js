import React from 'react'
import Form from './Form'
import styled from 'styled-components'

const ContactInfo = ({title,info,item}) => {
    return (
        <div className='contactItem'>
            <div className='info_cont'>
                <h3> {title} </h3>
                <h4> {info} </h4>
            </div>
        </div>
    )
}
const Map = () => {
    return (
        <div id='map'>

            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12567.19549616925!2d-85.8937526!3d38.0517725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84fe503f7f0dccf6!2sDJ&#39;s%20Auto%20Sales!5e0!3m2!1sen!2sus!4v1629216971160!5m2!1sen!2sus" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
        </div>
            
    )
}

const ContactStyles = styled.div`
width:90%;
margin:0 auto;
margin-top:8%;
h1{
    text-align:left;
    margin-bottom: 14%;
}
h2{
    width:60%;
    margin:0 auto;
    margin-bottom: 8%;
}
.contactItem{
    margin-top:12%;
}
.info_cont{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width:80%;
    margin:0 auto;
    h4{
        width:80%;
        color: gray;
    }
}
#map{
    margin-top:10%;
}

`
export default function ContactFooter() {
    return (
        <ContactStyles>
            {/* <h1>Contact Us</h1> */}
            <h2>We Want To Hear From You</h2>
            <div className='contactForm'>
            <Form />

            </div>
            <div className='contactInfo'>

            <ContactInfo
                title={"Phone Number"}
                info={'502 742 8213'}
            />
            <ContactInfo
                title={"Address"}
                info={'14115 Dixie Hwy, Louisville, KY'}
            />
                <Map />
            </div>
                
        </ContactStyles>
    )
}
