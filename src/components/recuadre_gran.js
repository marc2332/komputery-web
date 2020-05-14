import { element, routerLink, style } from '@mkenzo_8/puffin'

const RecuadreStyle = style`
	&  .rect{
		padding: 20px 30px;
		box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
		width: 350px;
		border: 1px solid black;
		border-radius: 25px;
		margin: 0px 100px;
		min-height: 250px;
	}
`

function RecuadreGran({ data }){
	return element({
		components:{
			routerLink
		}
	})`
		<div class="${RecuadreStyle} seccio centre">
			<div class="${data.clase}">
				<div class="rect">
					<h3 class="titol2">
						${data.titol}
					</h3>
					<p>
						${data.text}
					</p>
					<img src="${data.imatge}"/>
				</div>
			</div>
		</div>
	`
}

export default RecuadreGran