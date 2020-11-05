import React from 'react'
import styled from 'styled-components'

const ConsumidorButton = styled.button `
    background-color:#F05B78;
    color:#E1E1E6;
    border:none;
    border-radius:10px;
    padding: 15px;
    margin-top: 40px;
    font-size:18px;
`

export class Consumidor extends React.Component {
  render() {
    return (
      <div>
       
        <ConsumidorButton>Seja Consumidor</ConsumidorButton>
      </div>
    )
  }
}