import React from "react";
import css from './BackDrop.module.scss'

const BackDrop = props => {
	return(
		<div className={css.BackDrop}
		onClick={props.onClick}
		></div>
	)
}

export default BackDrop