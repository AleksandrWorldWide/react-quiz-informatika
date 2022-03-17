import React from "react";
import css from './Button.module.scss'

const Button = props => {
	const cls = [
		css.Button,
		css[props.type]
	]
	console.log(css)
	return (
		<button 
			onClick={props.click}
			className={cls.join(' ')}
		>
			{props.children}
		</button>
			
	)
}

export default Button