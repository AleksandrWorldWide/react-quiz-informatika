import React from 'react'
import css from './Auth.module.scss'
import Button from '../../Components/UI/Button/Button'
import Input from '../../Components/UI/Input/Input'

const validateEmail = (email) => {
	return String(email)
	  .toLowerCase()
	  .match(
		 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  );
 };
class Auth extends React.Component {

	state = {
		isFormValid: false,
		formControl: {
			email: {
				value: '',
				type: 'email',
				label: 'E-mail',
				errorMessage: 'invalid e-mail',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			pass: {
				value: '',
				type: 'password',
				label: 'Password',
				errorMessage: 'invalid password',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}

	validateControl(value, validation) {
		if (!validation) {
			return true
		}
		let isValid = true
		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}
		if (validation.email) {
			isValid = validateEmail(value) && isValid
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}
		return isValid
	}

	onChangeHandler(event, form) {
		const formControl = {...this.state.formControl}
		const control = {...formControl[form]}
		control.value = event.target.value
		control.touched = true
		control.valid = this.validateControl(control.value, control.validation)
		formControl[form] = control
		let isFormValid = true
		Object.keys(formControl).forEach(name => {
			isFormValid = formControl[name].valid && isFormValid
		})
		this.setState({
			formControl, isFormValid
		})
	}

	loginHandler() {

	}

	regHandler() {

	}

	submitHandler(event) {
		event.preventDefault()
	}

	render() {
		return(
			<div className={css.Auth}>
				<h2>Auth</h2>
				<form onSubmit={this.submitHandler}>
					{
						Object.keys(this.state.formControl).map((form, index) => {
							const ctrl = this.state.formControl[form]
							return(
								<Input
									key={form+index}
									label={ctrl.label}
									type={ctrl.type}
									value={ctrl.value}
									valid={ctrl.valid}
									touched={ctrl.touched}
									errorMessage={ctrl.errorMessage}
									shouldValidate={!!ctrl.validation}
									onChange={event => this.onChangeHandler(event, form)}
								/>
							)
						})
					}
					<Button type='primary' onClick={this.loginHandler} disabled={!this.state.isFormValid}>Enter</Button>
					<Button type='success' onClick={this.regHandler} disabled={!this.state.isFormValid}>Registration</Button>
				</form>
			</div>
		)
	}
}

export default Auth