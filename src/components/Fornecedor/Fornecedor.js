import React from 'react'
import styled from 'styled-components'

const FornecedorButton = styled.button `
    background-color:#F05B78;
    color: #E1E1E6;
    border:none;
    border-radius:10px;
    padding: 15px;
    margin-top: 70px;
    font-size:18px;
`
export class Fornecedor extends React.Component {
  render() {
    return (
      <div>
 
        <FornecedorButton>Seja Fornecedor</FornecedorButton>
       
      </div>
    )
  }
}