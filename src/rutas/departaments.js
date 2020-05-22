import { element, style, routerBox, routerLink } from '@mkenzo_8/puffin'

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

function Contacte(){
	return element({
		components:{
			InputButton,
			routerLink,
			routerBox
		}
	})`
		<div class="${ContacteStyle} contingut">
			<h1>
				Departaments
			</h1>
			<div>
				<nav>
					<routerLink group="departaments" to="/departaments/ceo">Direcció</routerLink>
					<routerLink group="departaments" to="/departaments/informatics">Informàtics</routerLink>
					<routerLink group="departaments" to="/departaments/contable">Administració</routerLink>
				</nav>
				<routerBox group="departaments" default="/departaments/ceo">
					<div from="/departaments/ceo">
						<ul>
							<li>Marc Espín <a href="mailto:marcespin@komputery.rubi">marcespin@komputery.rubi</a></li>	
						</ul>
					</div>
					<div from="/departaments/informatics">
						<ul>
							<li>Francisco José <a href="mailto:franciscojose@komputery.rubi">franciscojose@komputery.rubi</a></li>
							<li>Julia Garcia <a href="mailto:juliagarcia@komputery.rubi">juliagarcia@komputery.rubi</a></li>
							<li>Paula De Rojas <a href="mailto:pauladerojas@komputery.rubi">pauladerojas@komputery.rubi</a></li>
						</ul>
					</div>
					<div from="/departaments/contable">
						<ul>
							<li>Arnau Carreras <a href="mailto:arnaucarreras@komputery.rubi">arnaucarreras@komputery.rubi</a></li>
						</ul>
					</div>
				</routerBox>
			</div>
		</div>
	`
}

export default Contacte