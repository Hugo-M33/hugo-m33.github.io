import * as React from 'react';
import styled from "styled-components"
import {IoMdCheckmarkCircleOutline, IoMdStopwatch} from "react-icons/io"
import {IoPlayForwardOutline} from "react-icons/io5"

const Card = styled.div`
border-radius: 25px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 1.5em;
min-width: 500px;
opacity: ${props => props.status === "OK" ? 1 : props.status === "ONGOING" ? .6 : .3};
display: flex;
justify-content: space-around;
align-items: center;
margin: .5rem 0;
>div {
    order: ${props => props.style.alignSelf === "flex-end" ? 1 : -1};
}
h1 {
    font-size: 1.5rem;
}

h2 {
    font-size: 1rem;
    font-weight: 500;
    color: rgba(0,0,0,.5);
}

h3 {
    font-size: .8rem;
    color: rgba(0,0,0,.5);
    font-weight: 600;
}
h1,h2,h3 {
    margin: .5em 0;
}
`

const SchoolCard = ({children, style, status}) => {
    return (
        <Card style={style} status={status}>
            <div>
            {children}
            </div>
            
            {status === "OK" ? <IoMdCheckmarkCircleOutline color={"lime"} size={32}/> : status === "FUTURE" ? <IoPlayForwardOutline color={"red"} size={32}/> : <IoMdStopwatch color={"orange"} size={32}/>}
        </Card>
    )
}

export default SchoolCard
