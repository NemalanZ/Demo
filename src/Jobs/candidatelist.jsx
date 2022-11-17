/**
 * Signin Firebase
 */

 import React, { useState,useEffect } from 'react';
 import { Helmet } from "react-helmet";
 import {  Avatar_01 ,Avatar_02,Avatar_03 } from "../../../Entryfile/imagepath"
 import  Deletejob from "../../../_components/modelbox/Deletejob"
 import { Table } from 'antd';
 import 'antd/dist/antd.css';
 import {itemRender,onShowSizeChange} from "../../paginationfunction"
 import "../../antdstyle.css"
 
 const CandidateList = () => {



       return ( 
         <>
         {/* Page Wrapper */}
         <div className="page-wrapper">
            <Helmet>
                  <title>Candidates List - HRMS Admin Template</title>
                  <meta name="description" content="Login page"/>					
            </Helmet>
           Page Content
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row align-items-center">
                 <div className="col">
                   <h3 className="page-title">Candidates List</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"></li>
                     <li className="breadcrumb-item">Jobs</li>
                     <li className="breadcrumb-item active">Candidates List</li>
                   </ul>
                 </div>
                 <div className="col-auto float-end ml-auto">
                   <a href="#" data-bs-toggle="modal" data-bs-target="#add_employee" className="btn add-btn"> Add Candidates</a>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <div className="row">
               <div className="col-md-12">
                 <div className="table-responsive">
                 <Table className="table-striped"
                     pagination= { {total : data.length,
                        showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                     style = {{overflowX : 'auto'}}
                     columns={columns}                 
                     // bordered
                     dataSource={data}
                     rowKey={record => record.id}
                    //  onChange={this.handleTableChange}
                     />
                 </div>
               </div>
             </div>
           </div>
           {/* /Page Content */}
           {/* Add Employee Modal */}
           <div id="add_employee" className="modal custom-modal fade" role="dialog">
             <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title">Add Candidates</h5>
                   <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <form>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">Last Name</label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">Email <span className="text-danger">*</span></label>
                           <input className="form-control" type="email" />
                         </div>
                       </div>
                       <div className="col-sm-6">  
                         <div className="form-group">
                           <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                           <input type="text" className="form-control" />
                         </div>
                       </div>
                       <div className="col-sm-6">  
                         <div className="form-group">
                           <label className="col-form-label">Created Date <span className="text-danger">*</span></label>
                           <div><input className="form-control datetimepicker" type="date" /></div>
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">Phone </label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                     </div>
                     <div className="submit-section">
                       <button className="btn btn-primary submit-btn">Submit</button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
           {/* /Add Employee Modal */}
           {/* Edit Job Modal */}
           <div id="edit_job" className="modal custom-modal fade" role="dialog">
             <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title">Edit Candidates</h5>
                   <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <form>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">Last Name</label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">Email <span className="text-danger">*</span></label>
                           <input className="form-control" type="email" />
                         </div>
                       </div>
                       <div className="col-sm-6">  
                         <div className="form-group">
                           <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                           <input type="text" className="form-control" />
                         </div>
                       </div>
                       <div className="col-sm-6">  
                         <div className="form-group">
                           <label className="col-form-label">Created Date <span className="text-danger">*</span></label>
                           <div><input className="form-control datetimepicker" type="date" /></div>
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="form-group">
                           <label className="col-form-label">Phone </label>
                           <input className="form-control" type="text" />
                         </div>
                       </div>
                     </div>
                     <div className="submit-section">
                       <button className="btn btn-primary submit-btn">Save</button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
           {/* /Edit Job Modal */}
           {/* Delete Job Modal */}
          <Deletejob/>
           {/* /Delete Job Modal */}
         </div>
         {/* /Page Wrapper */}
         </>
       );
    }
 
 export default CandidateList;
 