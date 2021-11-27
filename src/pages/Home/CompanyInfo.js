import React from 'react'
import styled from 'styled-components'
import UsedTags from './UsedTags'
import { useHistory } from 'react-router'
import companyBkg from './companyBkg.jpeg'
const CompanyCont = styled.div`
/* height:150vh; */
background: rgba(255,255,255,.85);
padding-top:5%;
padding-bottom:3%;
background-image: url(${companyBkg});
background-size:cover;
background-position:center;
background-blend-mode: lighten;
/* margin-top: -5%; */
display:flex;
justify-content: center;
/* align-items:baseline; */
#infoItem_container{
    /* margin-top: 10%; */
    display: flex;
    flex-direction: column;
    @media (min-width:992px){
        text-align: left;
    }
}
`

const InfoItemCont = styled.div`
color:black;
width:60%;
margin:0 auto;
margin-top:5%;
.infoItemTitle{
    color:red;
    font-size:1.4rem;
}
.infoItemP{
    margin-top: 3%;
    font-size:1.4rem;
}
.infoItemLink{
    color:red;
}
@media (min-width:992px){
    margin-top:0;
    margin-bottom: 16%;
}

`
const InfoItem = ({ title, p, cta,link }) => {
    const {push} = useHistory()
    return <InfoItemCont>
        <h3 className='infoItemTitle'>{title}</h3>
        <p className="infoItemP"> {p}</p>
        {
            cta ?
                <p className='infoItemLink' onClick={() => push(`/${link}`)}>{cta}</p>
                :
                null
                
        }

    </InfoItemCont>
    
}
export default function CompanyInfo() {
    return (
        <CompanyCont>
            <UsedTags />   
            <div id='infoItem_container'>
            <InfoItem
                title={"Buy,Sell, Trade"}
                p={"We offer fair pricing  on vehicle trade ins"}
                />
            <InfoItem
                title={"Test Driving Available"}
                p={"Test drive any vehicle to see which is right with you"}
                />
            <InfoItem
                title={"Schedule an Appointment"}
                    p={"Call us today or send us a message to schedule"}
                    // cta={'Schedule Now>>'}
                    // link={'contact'}
                />
            </div>
        </CompanyCont>
    )
}
