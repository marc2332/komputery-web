import { element, routerBox, style,routerLink, render } from '@mkenzo_8/puffin'

import Inici from './rutas/inici'
import Contacte from './rutas/contacte'

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

const App = element({
	components:{
		routerBox,
		Nav,
		Inici,
		Contacte
	}
})`
	<div class="${AppStyle}">
		<Nav/>
		<routerBox group="nav" default="/inici">
			<Inici from="/inici"/>
			<Contacte from="/contacte"/>
		</routerBox>
	</div>
`

render(App,document.body)
