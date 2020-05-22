import { element, routerLink, routerBox,style } from '@mkenzo_8/puffin'

import RecuadreGran from '../components/recuadre_gran'

import Windows from '../images/windows.png'
import Xarxa from '../images/xarxa.jpg'
import Server from '../images/server.jpg'

const ServeisStyle = style`
	& * {
		text-align: center;
	}
	& > div{
		margin: 25px;
		padding: 40px;
	}
	& nav {
		display: flex;
		justify-content: center;
	}
	& a {
		color: black;
		cursor: pointer;
	}
	& a.active {
		color: rgb(50,50,50);
	}
`

function Serveis(){
	return element({
		components:{
			routerLink,
			RecuadreGran,
			routerBox
		}
	})`
		<div class="${ServeisStyle} contingut">
			<h1>
				Serveis
			</h1>
			<nav>
				<routerLink group="serveis" to="/serveis/iso">Sistemes Operatius</routerLink>
				<routerLink group="serveis" to="/serveis/cs">Xarxes</routerLink>
				<routerLink group="serveis" to="/serveis/server">Servidors</routerLink>
			</nav>
			<routerBox group="serveis" default="/serveis/iso">
				<RecuadreGran from="/serveis/iso" data="${{
					titol: 'Instal·lació sistemes operatius',
					text: `Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis. Com per exemple Windows 10 o cualsevol distribució Linux com per exemple Ubuntu o Debian`,
					imatge: Windows
				}}"/>
				<RecuadreGran from="/serveis/cs" data="${{
					titol: 'Configuració de Xarxes',
					text: "Podem muntar-te una xarxa d'ordinadors completa, desde zero i funcional",
					imatge: Xarxa
				}}"/>
				<RecuadreGran from="/serveis/server" data="${{
					titol: 'Configuració de Servidors',
					text: `Podem instal·larte i configurar servidors de dades o de Proxy o un firewall.`,
					imatge: Xarxa
				}}"/>
			</routerBox>
		</div>
	`
}

export default Serveis