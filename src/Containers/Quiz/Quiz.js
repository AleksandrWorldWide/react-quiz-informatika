import React from 'react'
import css from './Quiz.module.scss'
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz'

class Quiz extends React.Component {

	state = {
		isFinished: false,
		answerState: null,
		activeQuestion: 0,
		results: {},
		quiz : [
			{
				question: 'В таблицу базы данных СКЛАД, содержащую 5 столбцов информации о товаре (наименование, поставщик, количество, дата окончания срока хранения, цена), внесена информация о 25 видах товара. Количество записей в таблице равно …',
				id: 1,
				rightAnswer: 1,
				answers: [
					{text: '25', id: 1},
					{text: '5', id: 2},
					{text: '125', id: 3},
					{text: '30', id: 4}
				]
			},
			{
				question: 'В СУБД MS Access не существует запрос на _________ данных.',
				id: 2,
				rightAnswer: 1,
				answers: [
					{text: 'создание', id: 1},
					{text: 'обновление', id: 2},
					{text: 'удаление', id: 3},
					{text: 'добавление', id: 4}
				]
			}
		]
	}

	retryHandel = () =>{
		this.setState({
			isFinished: false,
			answerState: null,
			activeQuestion: 0,
			results: {}
		})
	}

	isQuizFinished() {
		return this.state.activeQuestion+1 === this.state.quiz.length
	}

	timeoutAnswer() {
		const timer = window.setTimeout(() => {
			if (this.isQuizFinished()) {
				this.setState({
					isFinished: true
				})
			} else {
				this.setState({
					activeQuestion: this.state.activeQuestion + 1,
					answerState: null
				})
			}
			window.clearTimeout(timer)
		}, 1000)
	}

	ClickHandle = (answerId) => {

		if (this.state.answerState) {
			return
		}

		const question = this.state.quiz[this.state.activeQuestion]

		if (question.rightAnswer === answerId) {
			this.setState({
				answerState: {
					[answerId]: 'success'
				},
				results: {...this.state.results,
					[question.id]: 'success'
				}
			})
			this.timeoutAnswer()
		} else {
			this.setState({
				answerState: {
					[answerId]: 'error'
				},
				results: {...this.state.results,
					[question.id]: 'error'
				}
			})
			this.timeoutAnswer()
		}

	}

	

	render() {

		return(
			<div className={css.Quiz}>
				{
					
					this.state.isFinished 
					? 
					<FinishedQuiz
						quiz={this.state.quiz}
						results={this.state.results}
						click={this.retryHandel}
					/> 
					:
					<ActiveQuiz
						activeQuestion = {this.state.activeQuestion}
						question = {this.state.quiz[this.state.activeQuestion].question}
						quiz = {this.state.quiz}
						answers = {this.state.quiz[this.state.activeQuestion].answers}
						click = {this.ClickHandle}
						state = {this.state.answerState}
					/>
				}
				


				
			</div>
		)
	}
	
}

export default Quiz

