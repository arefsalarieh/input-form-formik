import { Field, Form, Formik } from 'formik'
import React from 'react'

const Text = () => {
  const show = (values) =>{
    console.log(values);
  }
  return (
    <div>
      
      {/* <Formik initialValues={{fullName:'' , pass:''}} onSubmit={show}>
        <Form>
          <Field type='text' name='fullName' placeholder='fullName'/>
          <Field type='password' name='pass' placeholder='pass'/>
          <button type='submit'>click</button>
        </Form>
      </Formik>  */}



      {/* <Formik initialValues={{fullName:'' , pass:''}} onSubmit={show}>
          {({ values, handleSubmit, handleChange, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <input type='text' name='fullName' value={values.fullName} placeholder='fullName' onChange={handleChange}/>
              <input type='password' name='pass' value={values.pass}  placeholder='pass' onChange={handleChange}/>
              <button type='submit'>click</button>
            </form>
          )}
      </Formik> */}


    </div>
  )
}

export default Text