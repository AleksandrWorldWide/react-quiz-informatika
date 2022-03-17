
import React from 'react'
import css from './Layout.module.scss'
import MenuToggle from '../Navigation/MenuToggle/MenuToggle'
import Menu from '../Navigation/Menu/Menu'

class Layout extends React.Component {

	state = {
		menu: false
	}

	toggleHandle = () => {
		this.setState({
			menu: !this.state.menu
		})
	}

render() {
	return (
		<div className={css.Layout}>
			<Menu
				isOpen={this.state.menu}
				onToggle = {this.toggleHandle}
			/>
			<MenuToggle
				isOpen={this.state.menu}
				onToggle = {this.toggleHandle}
			/>
			
			<main>
				
				{this.props.children}
			</main>
		</div>
		
	)
}
	
}

export default Layout