import React from 'react';
import { Formik, Form,useField } from 'formik';
import * as Yup from 'yup';
import {FormGroup,FormLabel,FormControl,Button,Row} from 'react-bootstrap';

const TextInput = ({label,...props})=>{
    const [field,meta] = useField(props);
    return(
        <FormGroup as={Row} className="mb-4">
            <FormLabel style={{fontWeight:'bold'}}htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormControl className='p-2'{...field}{...props} />
            {meta.touched && meta.error ?(
                <div className="error text-wrap">{"*"+meta.error}</div> 
                ): null}
        </FormGroup>
        );
}

function Login(){
   return(
    <Formik
        initialValues={{
                    email:'',
                    password:''
                }}
    
                validationSchema = {Yup.object({
                    email: Yup.string()
                        .email("Please enter a valid email address")
                        .required("Mandatory Field"),
                    password: Yup.string()
                    .required('Please Enter your password')
                    .matches(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                    )
                })}
                    onSubmit={(values)=>{
                        setTimeout(()=>{
                            alert(JSON.stringify(values));
                        },400);
            }}
        >
        <Form>  
            <TextInput
                label="Email"
                name="email"
                id="email"
                placeholder="Enter Your Email ID"
                type="email"
            />
            <TextInput
                label="Password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                type="password"
            />
            <div className="d-grid mt-5 mb-2 col-6 mx-auto gap-2">
                <Button variant="primary" size="lg" type="submit">Login</Button>
            </div>
        </Form> 
    </Formik>
   )
    
}

export default Login;