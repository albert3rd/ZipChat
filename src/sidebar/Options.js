import React from 'react'
import styled from 'styled-components'

const OptionsWrapper = styled.div`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    :hover{
        opacity:.5;
        background-color: grey;
    }

    > h4 {
        font-weight:300;
    }
`
const SidebarOption = styled.div`

`

function Options({Icon, text}) {
    return (
        <OptionsWrapper>
            {Icon && <Icon fontSize="large" style={{padding: 10}}/>}
            {Icon ? (<h4>{text}</h4>) : (
                <SidebarOption>
                    <span>#</span> {text}
                </SidebarOption>
            )}
        </OptionsWrapper>
    )
}

export default Options
