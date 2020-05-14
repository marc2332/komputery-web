import { element, routerLink, style } from '@mkenzo_8/puffin'

const ButtonStyle = style`
	& {
		padding: 10px;
		border-radius: 4px;
		border: 0;
		background: rgb(40,40,40);
		color: white;
		transition: 0.2s;
	}
	&:hover {
		transition: 0.2s;
		box-shadow: 0 0 0 3px rgb(135,135,135);
	}
`

function Button2(){
	return element`
		<button type="submit" class="${ButtonStyle}"/>
	`
}

export default Button2