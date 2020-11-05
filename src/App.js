import React from 'react'
import { AppContainer } from './components/AppContainer'
import styled from 'styled-components'
import LogoSite from './img/logo.png'

const ContainerPai = styled.div `
	background-color: #8257E6;
	color: #E1E1E6;
	height: 100vh;
	display:flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	
`;

const Logobg = styled.div `
	height: 100px;
	width:390px;
	margin-bottom:50px;

`


export default class App extends React.Component{
	
	render(){

		return (
			<div>

				<Logobg>
					<img src={LogoSite} width="250px"/>
				</Logobg>
			<ContainerPai>
			<h2>Bem vindo(a) ao Desapega o seu Marketplace favorito</h2>
			<h2>Click em uma das opções abaixo:</h2>
			<AppContainer/>
			</ContainerPai>
			</div>
			)
		}
}


