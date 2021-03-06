import { element, routerBox, style,routerLink, render } from '@mkenzo_8/puffin'

import Inici from './rutas/inici'
import Contacte from './rutas/contacte'
import Serveis from './rutas/serveis'
import Departaments from './rutas/departaments'
import Footer from './components/footer'

import Nav from './components/nav'

const AppStyle = style`
	body {
		--colorPrincipal: rgb(255,175,48);
		margin: 0;
		background: var(--colorPrincipal);
		min-height: 100%;
		overflow-y: scroll;
	}
	& * {
		font-family: 'Inter', sans-serif;
	}
`

const Padre = element({
	components:{
		routerBox,
		Nav,
		Inici,
		Contacte,
		Footer,
		Serveis,
		Departaments
	}
})`
	<div class="${AppStyle}">
		<Nav/>
		<routerBox group="nav" default="/inici">
			<Inici from="/inici"/>
			<Contacte from="/contacte"/>
			<Serveis from="/serveis"/>
			<Departaments from="/departaments"/>
		</routerBox>
		<Footer/>
	</div>
`

render(Padre,document.body)



