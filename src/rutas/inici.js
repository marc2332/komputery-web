import { element, routerLink } from '@mkenzo_8/puffin'

import Recuadre from '../components/recuadre'
import Footer from '../components/Footer'

function Inici(){
	return element({
		components:{
			routerLink,
			Recuadre,
			Footer
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
					<routerLink class="link" to="/contacte">Contacta'ns </routerLink>
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
						<li><a class="link" >laallala</a></li>
					</ul>
				</div>
			</div>
			<Recuadre id="iso" data="${{
				titol: 'Instal·lació sistemes operatius',
				text: 'Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis.',
				clase: 'esq'
			}}"/>
			<Recuadre id="cs" data="${{
				titol: 'Configuració de sistemes en Xarxa',
				text: 'Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis.',
				clase: 'drt'
			}}"/>
			<Footer/>
		</div>
	`
}

export default Inici