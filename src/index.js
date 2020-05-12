import { element, routerBox, style,routerLink, render } from '@mkenzo_8/puffin'

import Inici from './rutas/inici'
import Contacte from './rutas/contacte'


const NavStyle = style`
	& {
		display: flex;
		list-style-type: none;
		padding: 15px;
		justify-content: center;
	}

	& > a {
		margin: 1px;
		padding: 7px;
	}

	& > a {
		padding-bottom: 4px;
		color: black;
		text-decoration: none;
		cursor: pointer;
	}

	& > a.active {
		border-bottom: 2px solid black;
	}
`

function Nav(){
	return element({
		components:{
			routerLink
		}
	})`
		<nav class="${NavStyle}">
			<routerLink to="/inici">Inici</routerLink>
			<routerLink to="/contacte">Contacta'ns</routerLink>
		</nav>
	`
}

const App = element({
	components:{
		routerBox,
		Nav,
		Inici,
		Contacte
	}
})`
	<div>
		<Nav/>
		<routerBox default="/inici">
			<Inici from="/inici"/>
			<Contacte from="/contacte"/>
		</routerBox>
	</div>
`

render(App,document.body)
