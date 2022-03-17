import css from './ListAnswers.module.scss'
import Answer from './Answer/Answer'

const ListAnswers = props => {
	
	return(
		
		<ul className={css.ListAnswers}>
			{
				props.answers.map((answer, index) => {
					return(
						<Answer
							key={index}
							answer={answer}
							click={props.click}
							state = {props.state ? props.state[answer.id] : null}
					/>
					)
				})
			}
		
		</ul>
	)
}

export default ListAnswers