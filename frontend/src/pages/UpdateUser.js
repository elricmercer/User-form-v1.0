import axios from 'axios';
import React, { useState } from 'react'

function UpdateUser() {
  document.title = "Update"

  const [id, setId] = useState('')
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [submitSearch, setSubmitSearch] = useState(false)
  const [found, setFound] = useState(false)
  const [error, setError] = useState(null)
  const [error2, setError2] = useState(null)
  const [saved, setSaved] = useState(false)

  function handleId(e){
    setId(e.target.value)
  }

  function handleSearchButton(e){
    e.preventDefault()
    setSubmitSearch(true)
    if(id!=''){
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
        setError2(err)
      })
    }
  }

  function handleUsername(e){
    setUsername(e.target.value)
  }

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handlePhoneNo(e){
    setPhoneNo(e.target.value)
  }

  function handleUpdateButton(e){
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/update/'+id, {
      username: username,
      first_name: first_name,
      last_name: last_name,
      phone_no: phone_no
    })
    .then(function(response){
      if(response!=null){
        setSaved(true)
      }
    })
    .catch(function(err){
      setError(err)
    })
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
                  <a href='/update' className="breadcrumb-item active">Back to Update</a>
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
                <form onSubmit={handleUpdateButton}>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">Username:</p>
                    <input type="text" className="form-control input-rounded " name='username' id='username' value={username} maxLength={12} onChange={handleUsername} />
                  </div>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">First Name:</p>
                    <input type="text" className="form-control input-rounded " name='first_name' id='first_name' value={first_name} maxLength={254} onChange={handleFirstName} />
                  </div>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">Last Name:</p>
                    <input type="text" className="form-control input-rounded " name='last_name' id='last_name' value={last_name} maxLength={254} onChange={handleLastName} />
                  </div>
                  <div className="form-group">
                    <p className="text-muted m-b-0 f-s-17">Phone No:</p>
                    <input type="text" className="form-control input-rounded " name='phone_no' id='phone_no' value={phone_no} maxLength={20} onChange={handlePhoneNo} />
                  </div>
                  <button type='submit' className='btn btn-primary btn-flat btn-addon m-b-10 m-l-5' onClick={handleUpdateButton}>
                    <i className='ti-pencil-alt'></i>
                    Update
                </button>
                </form>
                <div>
                  {error ? <div className='alert alert-danger'>Failed</div> : null}
                  {saved ? <div className='alert alert-success'>Updated</div> : null}
                </div>
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
                  <input type="text" className="form-control input-rounded " name='id' id='id' maxLength={10} onChange={handleId}/>
                  {submitSearch && !id ? <div className = 'alert alert-danger'>Please enter id</div> : null}
                </div>
                <button type='submit' className='btn btn-primary btn-flat btn-addon m-b-10 m-l-5' onClick={handleSearchButton}>
                  <i className='ti-search'></i>
                  Search
                </button>
              </form>
              <div>
                {error2 ? <div className='alert alert-danger'>No user found</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default UpdateUser
