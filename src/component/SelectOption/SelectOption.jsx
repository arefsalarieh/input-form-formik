import { Field, Form, Formik } from "formik";
import React from "react";

const SelectOption = () => {
//   const handleShow = (values) => {
//     console.log(values);
//   };

   const handleShowSimple = (e) => {
    console.log(e.target.value);

  }; 
  return (
    <div>
      {/* <Formik initialValues={{ color: "" }} onSubmit={handleShow}>
        <Form>
          <Field as="select" name="color">
            <option value="red">Red</option>

            <option value="green">Green</option>

            <option value="blue">Blue</option>
          </Field>

          <button type="submit">click</button>
        </Form>
      </Formik> */}

      {/* <Formik initialValues={{ colorss: "" }} onSubmit={handleShow}>
        {({ values, handleChange, handleSubmit , handleBlur}) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Color
            </label>
            <select
              name="colorss"
              value={values.colorss}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: "block" }}
            >
              <option value="" label="Select a color">
                Select a color{" "}
              </option>
              <option value="red" label="red">
                {" "}
                red
              </option>
              <option value="blue" label="blue">
                blue
              </option>
              
              <option value="green" label="green">
                green
              </option>
            </select>

          <button type="submit">click</button>

          </form>
        )}
      </Formik> */}

      {/* <select name="selectedFruit" defaultValue="orange" onChange={handleShowSimple}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select> */}


    </div>
  );
};

export default SelectOption;
