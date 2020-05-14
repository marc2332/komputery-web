import { element, routerLink, style } from '@mkenzo_8/puffin'

const FooterStyle = style`
	& {
		display: flex;
		list-style-type: none;
		padding: 35px 15px;
		justify-content: center;
	}
	& * {
		color: white;
		cursor: pointer;
	}
	& a:hover {
		color: rgb(225,225,225);
		text-decoration: underline;
	}
`

function Footer({ data }){
	return element({
		components:{
			routerLink
		}
	})`
		<div id="footer" class="${FooterStyle} seccio">
			<div>
				<ul>
					<li><routerLink group="nav" to="/contacte">Contacta'ns</routerLink></li>
					<li><a :click="${scrollTop}">Tornar a dalt</a></li>
				</ul>
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

export default Footer