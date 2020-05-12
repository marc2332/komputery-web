import { element } from '@mkenzo_8/puffin'

function Inici(){
	return element`
		<div class="contingut">
			<div id="headerInici" href="header" class="seccio esq">
				<div>
					<h1>
						Som Komputery
					</h1>
					<p>
						Experts en la informàtica
					</p>
					<a class="link" href="contacte.html">Contacta'ns -></a>
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
			<div id="iso" class="seccio esq centre">
				<div class="recuadre">
					<h3 class="titol2">
						Instal·lació sistemes operatius
					</h3>
					<p>
						Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis.
					</p>
				</div>
			</div>
			<div id="cs" class="seccio drt centre">
				<div class="recuadre">
					<h3 class="titol2">
						Configuració de sistemes en Xarxa
					</h3>
					<p>
						Nosaltres podem instal·larte el sistema operatiu que sigui en el ordinador que necessitis.
					</p>
				</div>
			</div>
			<div id="footer" class="seccio">
			</div>
		</div>
	`
}

export default Inici