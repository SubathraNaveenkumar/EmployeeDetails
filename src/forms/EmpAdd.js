import React, { useState } from 'react'

const EmpAdd = props => {
	
	const initialEmployState = { id: '', employee_name: '', employee_salary:'', employee_age:'' }

	const error = { nameErr: '', salErr:'', ageErr:'' }

	const [ validation, setValidation ] = useState(error);

	const [ user, setUser ] = useState(initialEmployState)

	const handleInputChange = event => {
		const { name, value } = event.target
	
		setUser({ ...user, [name]: value }) // curr obj value get array
	}

	return (
		<form
			onSubmit={event => {
			
				event.preventDefault()
				if (!user.employee_name || !user.employee_salary || !user.employee_age ) return

				setValidation({ nameErr: "Name should be characters"})
				if(!user.employee_name.match(/^[a-zA-Z]+$/)) return
				
				setValidation({ salErr: "Salary should be number" })
				if(!user.employee_salary.match(/^[0-9]+$/)) return
				
				setValidation({  ageErr: "Age should be number" })
				if(!user.employee_age.match(/^[0-9]+$/)) return	  

				setValidation(error)
				
				props.addEmply(user)
				setUser(initialEmployState)
			}}
		>
			<label>Employee Id</label>
			<input type="text" name="id"  value={user.id} onChange={handleInputChange} />

			<label>Employee Name</label>
			<input type="text" name="employee_name"  value={user.employee_name} onChange={handleInputChange} />
			<label className="error">{validation.nameErr }</label>
			
			<label>Employee Salary</label>
			<input type="text" name="employee_salary" value={user.employee_salary} onChange={handleInputChange} />
			<label className="error">{validation.salErr}</label>

			<label>Employee Age</label>
			<input type="text" name="employee_age"  value={user.employee_age} onChange={handleInputChange} />
			<label className="error">{validation.ageErr}</label>

			<button>Create</button>
		</form>
	)
}

export default EmpAdd
