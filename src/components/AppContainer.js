import React from 'react'
import {Fornecedor} from '../components/Fornecedor/Fornecedor'
import {Consumidor} from '../components/Consumidor/Consumidor'
import styled from 'styled-components'

const ContainerApp = styled.div `
  background-color: #E1E1E6;
  justify-content:center;
  align-items:center;
  text-align:center;
  height: 30vh;
  width: 280px;
  border-radius: 30px;
  margin-top: 50px;
`;

export class AppContainer extends React.Component {
  render() {
    return (
      <ContainerApp>
        <Fornecedor/>
        <Consumidor/>
      </ContainerApp>
    )
  }
}
