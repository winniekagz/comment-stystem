import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react';
import { getToken} from '../config/UseToken';
import { Oval } from 'react-loader-spinner';
import * as Yup from 'yup';


const AddComment = ({ParentCallBack}) => {
    const userId=localStorage.getItem('userId')
    const token=getToken()
    const [comment,setComment]=React.useState('')
    const [loading,setLoading]=React.useState(false)
 

const AddObjective=async(values)=>{
    const data = {
      user : userId,
      content: values.content
    }
    try {
        setLoading(true);
        const response = await axios.post(`http://localhost:5000/api/comments/add`, data,{
          headers: {
            'Authorization': `Bearer ${token}`
        }
        })
          console.log("respone",response.data)
          ParentCallBack(response.data)
        setLoading(false);   
  
    } catch (error) {
        setLoading(false);
        console.log('error',error)
       
    }
}


        return (
        <div>
            <div class=" col-12 mt-4">
            <Formik
                initialValues={{
                    "content":"",
                    
                }}
                validationSchema={Yup.object({
                    content: Yup.string().required('Required'),
                    
         
                    
                  })}
                  onSubmit={(values,{resetForm}) => {
                    AddObjective(values);
                    resetForm({values:""})
                    console.log("submit values",values)
                  }}
            >
                 {({values, isSubmitting, errors, handleSubmit, handleChange,dirty,isValid}) => (
                    <Form>
                        
                        <div class="modal-content">
                        <div class="modal-header">
                 
                            <h5 class="modal-title">State an objective  </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        
                        <div class="modal-body">
                            <div class="">
                            <div class="mb-3">
                                <label class="mb-1"><strong>comment</strong></label>
                                <textarea type="text"
                                rows="4"
                                 class="form-control"                         
                                 name = 'content'
                                id = 'content'
                                onChange={handleChange}
                                value={values.content}
                                
                                 />
                                 <div style={{color:"red"}}>
                                    {errors.content}
                                </div> 
                            </div>

                          
                            </div>
                        </div>
                        <div class="modal-footer" style={{display:"flex"}}>
                          <div className="text-center mt-4">
                            <button type="button" class="btn btn-danger light" data-bs-dismiss="modal" >Close</button>
                          </div>
                          <div className="text-center mt-4">
                            {loading && (
                              <button type="submit" className="btn btn-primary btn-block" disabled >
                                <div style={{display:"flex",flexDirection:"row",paddingLeft:"30px"}}>

                                <Oval  height="20"
                                  width="20"
                                  color='white'
                                  ariaLabel='loading'/>
                                  <p style={{marginLeft:"30px"}}>adding...</p>
                                </div>
                                  
                              </button>
                              
                            )}
                            {!loading && (
                              <button type="submit" disabled={dirty && isValid ? false : true}
                              className="btn btn-primary btn-block"
                              >add objective</button>
                              )}
                            
                              
                          </div>
                        </div>
                        </div>
                    </Form>
                 )}
            </Formik>

                        </div>
        </div>
    );
}

export default AddComment;
