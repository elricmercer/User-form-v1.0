import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewAllUsers() {
  document.title = "Users"

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [found, setFound] = useState(false)
  const url = "http://127.0.0.1:8000/api/users"

  useEffect(()=>{
    axios.get(url)
    .then(function(response){
      setFound(true)
      setData(response.data)
    })
    .catch(function(err){
      setError(err)
    })
  }, [url])

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
            {error ? <h4>Error....!</h4> : null}
            {found ? <h4>All Users</h4> : null}
          </div>
          {found ? <div>
            {data && data.map((users, index) => 
              <div key={users.id}>
                <div className="card-body">
                  <div className="basic-form">
                    <form>
                      <div className="form-group">
                        <p className="text-muted m-b-0 f-s-17">ID:</p>
                        <input type="text" className="form-control input-rounded " value={users.id} disabled />
                      </div>
                      <div className="form-group">
                        <p className="text-muted m-b-0 f-s-17">Username:</p>
                        <input type="text" className="form-control input-rounded " value={users.username} disabled />
                      </div>
                      <div className="form-group">
                        <p className="text-muted m-b-0 f-s-17">First Name:</p>
                        <input type="text" className="form-control input-rounded " value={users.first_name} disabled />
                      </div>
                      <div className="form-group">
                        <p className="text-muted m-b-0 f-s-17">Last Name:</p>
                        <input type="text" className="form-control input-rounded " value={users.last_name} disabled />
                      </div>
                      <div className="form-group">
                        <p className="text-muted m-b-0 f-s-17">Phone No:</p>
                        <input type="text" className="form-control input-rounded " value={users.phone_no} disabled />
                      </div>
                    </form>
                    <span>*****************************************************************************************************************</span>
                  </div>
                </div>
              </div>
            )}
          </div> : null}
        </div>
      </div>
    </div>
  )
}

export default ViewAllUsers
