import React from 'react'

function HomePage() {
    document.title = "Home"

  return (
    <div>
        <div className="content-wrap">
            <div className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 p-r-0 title-margin-right">
                            <div className="page-header">
                                <div className="page-title">
                                    <h1>Hello, <span>Welcome To User Form Demo. [Django REST + Reactjs]</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /# row */}
                    <section id="main-content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="stat-widget-one">
                                        <a href='/view' className="stat-icon dib"><i className="ti-archive color-primary border-primary" /></a>
                                            <div className="stat-content dib">
                                                <div className="stat-digit">All users</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="stat-widget-one">
                                        <a href='/create' className="stat-icon dib"><i className="ti-plus color-success border-success" /></a>
                                            <div className="stat-content dib">
                                                <div className="stat-digit">Create User</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="stat-widget-one">
                                        <a href='/search' className="stat-icon dib"><i className="ti-search color-pink border-pink" /></a>
                                            <div className="stat-content dib">
                                                <div className="stat-digit">Search User</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="stat-widget-one">
                                        <a href='/update' className="stat-icon dib"><i className="ti-plus color-warning border-warning" /></a>
                                            <div className="stat-content dib">
                                                <div className="stat-digit">Update User</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="stat-widget-one">
                                        <a href='/delete' className="stat-icon dib"><i className="ti-plus color-danger border-danger" /></a>
                                            <div className="stat-content dib">
                                                <div className="stat-digit">Delete User</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
