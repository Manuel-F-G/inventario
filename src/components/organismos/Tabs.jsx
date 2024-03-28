import { useState } from "react";
import styled from "styled-components"
import { v } from "../../styles/variables";
export function Tabs(){
    const [activeTab, setActiveTab] = useState(0);
    return(
    <Container className="container">
        <ul className="tabs">
            <li className={activeTab == 0? "active" : ""}>
                {<v.iconopie/>}
                Kardex
            </li>
            <span className="glider"></span>
        </ul>
        <div className="tab-content">  
        </div>
        </Container>);
}
const Container =styled.div`
`