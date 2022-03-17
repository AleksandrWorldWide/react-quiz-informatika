import css from './Question.module.scss'

const Question = props => {

	return(
		<div className={css.Question}>
			<h1>{props.activeQuestion+1}.</h1>&nbsp;
			<p>{props.question}</p>
			<p className={css.side}>{props.activeQuestion+1} von {props.quiz.length}</p>
		</div>
	)
}

export default Question