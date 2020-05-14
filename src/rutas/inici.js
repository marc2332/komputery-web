import { element, routerLink } from '@mkenzo_8/puffin'

import Recuadre from '../components/recuadre'
import InputButton from '../components/button2'

function Inici(){
	return element({
		components:{
			routerLink,
			Recuadre,
			InputButton
		}
	})`
		<div class="contingut">
			<div id="headerInici" href="header" class="seccio esq">
				<div>
					<h1>
						Komputery
					</h1>
					<p>
						Experts en la informàtica
					</p>
					<routerLink class="link" group="nav" to="/contacte">Contacta'ns </routerLink>
				</div>
			</div>
			<div href="mig"  class="seccio seccio-mig">
				<div>
					<h2 class="titol2">
						Que fem?
					</h2>
					<ul>
						<li><a class="link" href="#iso">Instal·lació de sistemes operatius</a></li>
						<li><a class="link" href="#cs">Configuració de sistemes en Xarxa</a></li>
					</ul>
				</div>
			</div>
			<Recuadre id="iso" data="${{
				titol: 'Instal·lació sistemes operatius',
				text: 'Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis.',
				clase: 'esq'
			}}"/>
			<Recuadre id="cs" data="${{
				titol: 'Configuració de Xarxes',
				text: "Podem muntar-te una xarxa d'ordinadors completa, desde zero i funcional",
				clase: 'drt'
			}}"/>
			<div href="mig"  class="seccio seccio-mig">
				<routerLink group="nav" to="/serveis"><InputButton :click="${scrollTop}">Veure més</InputButton></routerLink>
			</div>
			
		</div>
	`
}

function scrollTop(){
	setTimeout(()=>{
		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth'
		});
	},25)
}

export default Inici