import React from 'react'
import css from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {
	const richtig = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'success') {
			total++
		}
		return total
	}, 0)

	
	
	return(
		<div  className={css.FinishedQuiz}>
			<ul>
				{
					props.quiz.map((item, id) => {

						const cls = [
							'fa',
							props.results[id+1] === 'success' ? 'fa-check' : 'fa-times',
							css[props.results[id+1]]
						]
						console.log(cls)
						return(
							<li key={id}>
								{item.id}.&nbsp;
								{item.question}.&nbsp;
								<i className={cls.join(' ')}></i>
							</li>
						)
					})
				}
			</ul>
			<p className={css.results}>richtig {richtig} von {props.quiz.length}</p>
			<Button
				click={props.click}
				type='primary'
			>wiederholen
			</Button>
			<Button
				type='success'
			>
				<Link to={'/'}>to list Tests</Link>
			</Button>
		</div>
	)
}

export default FinishedQuiz