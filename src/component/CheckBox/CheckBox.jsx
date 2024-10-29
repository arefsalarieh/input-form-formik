import { Field, Form, Formik } from 'formik';
import React from 'react'

const CheckBox = () => {
  return (
    <div>
        <h1>CheckBox</h1>

        <Formik initialValues={{ toggle: true,checked: [],}} onSubmit={(values)=>console.log(values)}>
        {({ values , handleSubmit , handleChange}) => (
            <form  onSubmit={handleSubmit}>
                <label>
                    <Field type="checkbox" name="toggle" />
                    {`${values.toggle}`}
                </label>


                <div id="checkbox-group">Checked</div>

                <div role="group" aria-labelledby="checkbox-group">
                    <label>
                    <input type="checkbox" name="checked" value="One"  onChange={handleChange} />
                    One
                    </label>
                    <label>
                    <input type="checkbox" name="checked" value="Two"  onChange={handleChange} />
                    Two
                    </label>
                    <label>
                    <input type="checkbox" name="checked" value="Three"  onChange={handleChange}/>
                    Three
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        )}
        </Formik>


{/* 
        <Formik initialValues={{ toggle: true,checked: [],}} onSubmit={(values)=>console.log(values)}>

            <Form>

            <label>
                <Field type="checkbox" name="toggle" />
            </label>


            <div id="checkbox-group">Checked</div>
            <div role="group" aria-labelledby="checkbox-group">
                <label>
                <Field type="checkbox" name="checked" value="One" />
                One
                </label>
                <label>
                <Field type="checkbox" name="checked" value="Two" />
                Two
                </label>
                <label>
                <Field type="checkbox" name="checked" value="Three" />
                Three
                </label>
            </div>

            <button type="submit">Submit</button>
            </Form>
        
        </Formik>  */}
    </div>
  )
}

export default CheckBox