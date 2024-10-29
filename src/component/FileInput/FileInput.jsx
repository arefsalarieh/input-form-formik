import { Field, Form, Formik } from 'formik'
import React from 'react'

const FileInput = () => {
    
  return (
    <div>
        <Formik initialValues={{ img: null }} onSubmit={(values)=>console.log(values)}>
          {({ values, handleSubmit, handleChange, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <input name="img" type="file" onChange={(e) => { setFieldValue("img", e.target.files[0]);}}/>
              <button type='submit'>click</button>
            </form>
          )}
        </Formik>

    </div>
  )
}

export default FileInput