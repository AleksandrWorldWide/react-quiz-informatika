import React from "react";
import css from './Menu.module.scss'
import BackDrop from '../../UI/BackDrop/BackDrop'
import { NavLink } from "react-router-dom";

const links = [
	{to:'/auth', label:'auth'},
	{to:'quiz-creator', label:'create Test'},
	{to:'/', label:'list of Tests'}
]

class Menu extends React.Component {

	
	renderLinks (){
		return(
			links.map((link, id) => {
				return(
					<li
						key={id}
					>
						<NavLink to={link.to} onClick={this.props.onToggle}>{link.label}</NavLink>
					</li>
				)
			})
		)
	}
render() {
	const cls = [
		css.Menu,
		
	]


	if (!this.props.isOpen) {
		cls.push(css.close)
	}

	return(
		<React.Fragment>
			<nav className={cls.join(' ')}>
				<ul>
					{this.renderLinks()}
				</ul>
			</nav>
			{this.props.isOpen ? <BackDrop
				onClick={this.props.onToggle}
			/> : null}
		</React.Fragment>
		
	)
}
	
}

export default Menu