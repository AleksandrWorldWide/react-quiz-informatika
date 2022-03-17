import css from './Answer.module.scss'

const Answer = props => {

	const cls = [
		css.Answer
	]

	if (props.state) {
		cls.push(css[props.state])
	}

	return(
		
		<li className={cls.join(' ')}
			onClick={() => props.click(props.answer.id)}
		>
			{props.answer.text}
		</li>
	)
}

export default Answer