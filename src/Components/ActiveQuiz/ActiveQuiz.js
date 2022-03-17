import React from "react";
import css from './ActiveQuiz.module.scss'
import Question from "../QuizWrapper/Question/Question";
import ListAnswers from "../QuizWrapper/ListAnswers/ListAnswers";

const ActiveQuiz = props => {
	return (
		<div className={css.ActiveQuiz}>
			<Question
				activeQuestion = {props.activeQuestion}
				question = {props.question}
				quiz = {props.quiz}
			/>
			<ListAnswers
				answers = {props.answers}
				click = {props.click}
				state = {props.state}
			/>
		</div>
	)
}

export default ActiveQuiz