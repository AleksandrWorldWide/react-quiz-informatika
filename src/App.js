
import React from 'react'
import Layout from './Components/Layout/Layout'
import Quiz  from './Containers/Quiz/Quiz'
import {Routes, Route} from 'react-router-dom'
import Auth from './Containers/Auth/Auth'
import QuizCreator from './Containers/QuizCreator/QuizCreator'
import QuizList from './Containers/QuizList/QuizList'

class App extends React.Component {
	render() {
		return (

			<Layout>
				<Routes>
					<Route path='/auth' element={<Auth/>}/>
					<Route path='/quiz-creator' element={<QuizCreator/>}/>
					<Route path='quiz/:id' element={<Quiz/>}/>
					<Route path='/' element={<QuizList/>}/>
				</Routes>
			</Layout>
	
		)
	}
	
}

export default App