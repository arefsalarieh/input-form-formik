import { Field, Form, Formik } from 'formik';
import React from 'react'

const Radio = () => {
    const show = (e) =>{
        console.log(e.target.value);
    }
  return (
    <div>
        <h1>Radio</h1>
{/* 
        <Formik initialValues={{picked: ''}}  onSubmit={(values)=>console.log(values)}>
            {({ values , handleSubmit , handleChange }) => (

                <form onSubmit={handleSubmit}>
                    
                    <div id="my-radio-group">Picked</div>
                    
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                        <input type="radio" name="picked" value='one' onChange={handleChange}/>
                        One
                        </label>
                        
                        <label>
                        <input type="radio" name="picked" value='two' onChange={handleChange}/>
                        two
                        </label>
                        <div>Picked: {values.picked}</div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik> */}


         {/* <Formik initialValues={{picked: ''}}  onSubmit={(values)=>console.log(values)}>
 
            <Form>
            <div id="my-radio-group">Picked</div>
            
            <div role="group" aria-labelledby="my-radio-group">
                <label>
                <Field type="radio" name="picked" value='one' />
                One
                </label>

                <label>
                <Field type="radio" name="picked" value='two'/>
                two
                </label>
                
            </div>

            <button type="submit">Submit</button>
            </Form>
        
        </Formik>   */}


        <input type="radio" name='x' value='1' id='d1' onChange={show} />
        <label htmlFor="d1"> 1</label>

        <input type="radio" name='x' value='2' id='d2' onChange={show} />
        <label htmlFor="d2"> 2</label>

    </div>
  )
}

export default Radio