import React from "react";
import css from './Button.module.scss'

const Button = props => {
	const cls = [
		css.Button,
		css[props.type]
	]
	console.log(props.disabled)
	return (
		<button 
			onClick={props.click}
			className={cls.join(' ')}
			disabled={props.disabled}
		>
			{props.children}
		</button>
			
	)
}

export default Button