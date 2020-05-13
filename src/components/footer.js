import { element, routerLink, style } from '@mkenzo_8/puffin'

const FooterStyle = style`
	& {
		display: flex;
		list-style-type: none;
		padding: 15px;
		justify-content: center;
		color: white;
	}

`

function Footer({ data }){
	return element`
		<div id="footer" class="${FooterStyle} seccio">
			<p>Peu</p>
		</div>
	`
}

export default Footer