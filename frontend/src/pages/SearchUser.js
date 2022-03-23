import React, { useState } from 'react'
import axios from "axios"

function SearchUser() {
  document.title = "Search"

  const [id, setId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [found, setFound] = useState(false)
  const [username, setUsername] = useState(null)
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [phone_no, setPhoneNo] = useState(null)
  const [error, setError] = useState(null)

  function handleIdChange(e){
    setId(e.target.value)
  }

  function handleSearchButton(e){
    e.preventDefault()
    setSubmitted(true)
    if(id!=null){
      axios.get('http://127.0.0.1:8000/api/view/'+id)
      .then(function(response){
        if(response.data!=null){
          setFound(true)
          setUsername(response.data.username)
          setFirstName(response.data.first_name)
          setLastName(response.data.last_name)
          setPhoneNo(response.data.phone_no)
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
      {found ? <div>
        <div className="col-lg-6">
          <div className="col-lg-4 p-l-0 title-margin-left">
            <div className="page-header">
              <div className="page-title">
                <ol className="breadcrumb">
                  <a href='/search' className="breadcrumb-item active">Back to Search</a>
                </ol>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h4>ID: {id}</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">Username:</p>
                    <input type="text" className="form-control input-rounded " value={username} disabled />
                  </div>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">First Name:</p>
                    <input type="text" className="form-control input-rounded " value={first_name} disabled />
                  </div>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">Last Name:</p>
                    <input type="text" className="form-control input-rounded " value={last_name} disabled />
                  </div>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">Phone No:</p>
                    <input type="text" className="form-control input-rounded " value={phone_no} disabled />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>  
      </div> : 
      <div className="col-lg-6">
        <div className="card">
          <div className="card-title">
            <h4>Search User</h4>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <form onSubmit={handleSearchButton}>
                <div className="form-group">
                  <p className="text-muted m-b-0 f-s-17">ID:</p>
                  <input type="text" className="form-control input-rounded " name='id' id='id' maxLength={10} onChange={handleIdChange}/>
                  {submitted && !id ? <div className = 'alert alert-danger'>Please enter id</div> : null}
                </div>
                <button type='submit' className='btn btn-primary btn-flat btn-addon m-b-10 m-l-5' onClick={handleSearchButton}>
                  <i className='ti-search'></i>
                  Search
                </button>
              </form>
              <div>
                {error ? <div className='alert alert-danger'>No user found</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default SearchUser
