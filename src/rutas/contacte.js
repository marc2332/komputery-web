import { element, style } from '@mkenzo_8/puffin'

import InputButton from '../components/button'

const ContacteStyle = style`
	&  ul{
		padding: 10px;
		margin: 35px 0;
	}
	& input, & textarea {
		padding: 10px;
		border: 0;
		border-radius: 5px;
		transition: 0.3s;
	}
	& input:focus, & textarea:focus {
		padding: 10px;
		border: 0;
		border-radius: 5px;
		box-shadow: 0 0 0 3px rgb(135,135,135);
		transition: 0.3s;
	}
	& h2 {
		margin: 25px 15px;
	}
`

function Contacte(){
	return element({
		components:{
			InputButton
		}
	})`
		<div class="${ContacteStyle} contingut">
			<div class="seccio">
				<div>
					<h1>
						Contacta'ns
					</h1>
					<ul>
						<li>Marc Espín <a href="mailto:marcespin@komputery.rubi">marcespin@komputery.rubi</a></li>
						<li>Francisco José <a href="mailto:franciscojose@komputery.rubi">franciscojose@komputery.rubi</a></li>
						<li>Julia Garcia <a href="mailto:juliagarcia@komputery.rubi">juliagarcia@komputery.rubi</a></li>
						<li>Paula De Rojas <a href="mailto:pauladerojas@komputery.rubi">pauladerojas@komputery.rubi</a></li>
						<li>Arnau Carreras <a href="mailto:arnaucarreras@komputery.rubi">arnaucarreras@komputery.rubi</a></li>
					</ul>
					<h2>Envia'ns un correu</h2>
					<form action="mailto:marcespin@komputery.rubi?subject=Missatge de client." method="post" enctype="text/plain">
						<p>Nom: </p>
						<input type="text" name="Nom"/>
						<p>Missatge: </p>
						<textarea type="text" name="Missatge"></textarea> <br/>
						<InputButton value="enviar" style="padding:10px;"/>
					</form>
				</div>
			</div>
		</div>
	`
}

export default Contacte