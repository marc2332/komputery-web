import { element, routerLink, style } from '@mkenzo_8/puffin'

const NavStyle = style`
	& {
		display: flex;
		list-style-type: none;
		padding: 15px;
		justify-content: center;
	}

	& > a {
		margin: 1px;
		padding: 7px;
	}

	& > a {
		padding-bottom: 4px;
		color: black;
		text-decoration: none;
		cursor: pointer;
	}

	& > a.active {
		border-bottom: 2px solid black;
	}
`

function Nav(){
	return element({
		components:{
			routerLink
		}
	})`
		<nav class="${NavStyle}">
			<routerLink group="nav" to="/inici">Inici</routerLink>
			<routerLink group="nav" to="/contacte">Contacta'ns</routerLink>
		</nav>
	`
}

export default Nav