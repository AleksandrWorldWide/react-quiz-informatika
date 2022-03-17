import css from './QuizList.module.scss'
import { NavLink } from 'react-router-dom'

const QuizList = props => {
	return(
		<div className={css.QuizList}>
			<h1>List of Tests</h1>
				<ul>
					{
						[1,2,3].map((link, index) => {
							return(
								<li key={index}>
									<NavLink to={'quiz/' + link}>
										Test {link}
									</NavLink>
								</li>
							)
						})
					}
				</ul>
		</div>
	)
}

export default QuizList