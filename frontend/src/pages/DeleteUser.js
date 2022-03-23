import axios from 'axios'
import React, { useState } from 'react'

function DeleteUser() {
  document.title = "Delete"

  const [id, setId] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [error, setError] = useState(null)

  function handleIdChange(e){
    setId(e.target.value)
  }

  function handleDeleteButtom(e){
    e.preventDefault()
    setSubmitted(true)
    if(id!=''){
      axios.delete('http://127.0.0.1:8000/api/delete/'+id)
      .then(function(response){
        if(response!=null){
          setDeleted(true)
        }
      })
      .catch(function(err){
        setError(err)
      })
    }
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
            <h4>Enter ID</h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <form onSubmit={handleDeleteButtom}>
                <div className="form-group">
                  <p className="text-muted m-b-0 f-s-17">ID:</p>
                  <input type="text" className="form-control input-rounded " name='id' id='id' maxLength={10} onChange={handleIdChange}/>
                  {submitted && !id ? <div className = 'alert alert-danger'>Please enter id</div> : null}
                </div>
                <button type='submit' className='btn btn-primary btn-flat btn-addon m-b-10 m-l-5' onClick={handleDeleteButtom}>
                  <i className='ti-trash'></i>
                  Delete
                </button>
              </form>
              <div>
                {deleted ? <div className='alert alert-success'>Deleted</div> : null}
                {error ? <div className='alert alert-danger'> Failed to delete</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser
