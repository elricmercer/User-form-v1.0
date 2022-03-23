import React, { useState } from 'react'

function CreateUser() {
  document.title = "Create User"

  const [username, setUsername] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleUsernameChange(e){
    setUsername(e.target.value)
  }
  function handleFirstNameChange(e){
    setFirst_name(e.target.value)
  }
  function handleLastNameChange(e){
    setLast_name(e.target.value)
  }
  function handlePhoneNoChange(e){
    setPhone_no(e.target.value)
  }
  function handleSubmitButtonPress(e){
    e.preventDefault()
    setSubmitted(true)
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        first_name: first_name,
        last_name: last_name,
        phone_no: phone_no,
      }),
    };
    fetch('http://127.0.0.1:8000/api/create', requestOptions)
    .then((response) => response.json())
  }

  return (
    <div>
      <div className="col-lg-4 p-l-0 title-margin-left">
        <div className="page-header">
          <div className="page-title">
            <ol className="breadcrumb">
              <a href='/' className="breadcrumb-item active">Home</a>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-title">
            <h4>User Form</h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <form onSubmit={handleSubmitButtonPress}>
                <div className="form-group">
                  <p className="text-muted m-b-0 f-s-17">Username:</p>
                  <input type="text" className="form-control input-rounded " name='username' id='username' maxLength={12} onChange={handleUsernameChange}/>
                  {submitted && !username ? <div className = 'alert alert-danger'>Please enter Username</div> : null}
                </div>
                <div className="form-group">
                  <p className="text-muted m-b-0 f-s-17">First Name:</p>
                  <input type="text" className="form-control input-rounded " name='first_name' id='first_name' maxLength={250} onChange={handleFirstNameChange}/>
                  {submitted && !first_name ? <div className = 'alert alert-danger'>Please enter First Name</div> : null}
                </div>
                <div className="form-group">
                  <p className="text-muted m-b-0 f-s-17">Last Name:</p>
                  <input type="text" className="form-control input-rounded " name='last_name' id='last_name' maxLength={250} onChange={handleLastNameChange}/>
                  {submitted && !last_name ? <div className = 'alert alert-danger'>Please enter Last Name</div> : null}
                </div>
                <div className="form-group">
                  <p className="text-muted m-b-0 f-s-17">Phone No:</p>
                  <input type="text" className="form-control input-rounded " name='phone_no' id='phone_no' maxLength={20} onChange={handlePhoneNoChange}/>
                  {submitted && !phone_no ? <div className = 'alert alert-danger'>Please enter phone_no</div> : null}
                </div>
                <button type='submit' className='btn btn-primary btn-flat btn-addon m-b-10 m-l-5' onClick={handleSubmitButtonPress}>
                  <i className='ti-plus'></i>
                  Submit
                </button>
              </form>
              {submitted ? <div className='alert alert-success'> Successfully submited </div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser
