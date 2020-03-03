import React, { useState, useEffect } from 'react'

const EmpEdit = props => {
  const [user, setUser] = useState(props.currentEmp) 

    useEffect(
      () => {
        setUser(props.currentEmp)
      }, [props]
    )

    const handleInputChange = event => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
    }

    return (
      <form
        onSubmit={event => {
         event.preventDefault()
         props.updateEmploy(user.id, user)
      }}
      >
        <label>Employee Id</label>
        <input type="text" name="id" value={user.id} onChange={handleInputChange} />

        <label>Employee Name</label>
        <input type="text" name="employee_name" value={user.employee_name} onChange={handleInputChange} />

        <label>Employee Salary</label>
        <input type="text" name="employee_salary" value={user.employee_salary} onChange={handleInputChange} />

        <label>Employee Age</label>
        <input type="text" name="employee_age" value={user.employee_age} onChange={handleInputChange} />

        <button>Update</button>
        <button onClick={() => props.setEditing(false)} className="button muted-button">
          Cancel
        </button>
      </form>
  )
}

export default EmpEdit
