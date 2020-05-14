import { element, routerLink } from '@mkenzo_8/puffin'

import RecuadreGran from '../components/recuadre_gran'

import Windows from '../images/windows.png'
import Xarxa from '../images/xarxa.jpg'

function Inici(){
	return element({
		components:{
			routerLink,
			RecuadreGran
		}
	})`
		<div class="contingut">
			<RecuadreGran id="iso" data="${{
				titol: 'Instal·lació sistemes operatius',
				text: `Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis. Com per exemple Windows 10 o cualsevol distribució Linux com per exemple Ubuntu o Debian`,
				clase: 'esq',
				imatge: Windows
			}}"/>
			<RecuadreGran id="cs" data="${{
				titol: 'Configuració de Xarxes',
				text: "Podem muntar-te una xarxa d'ordinadors completa, desde zero i funcional",
				clase: 'drt',
				imatge: Xarxa
			}}"/>
		</div>
	`
}

export default Inici