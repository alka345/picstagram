import React,{useState} from 'react';
// import authService from '../appwrite/auth'
// import { Link, useNavigate } from 'react-router-dom'
// import { login } from '../store/authSlice'
// import {Button, Input, Logo} from "./index.js"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';

function SignUp() {
  // const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  
  const create = async(data) => {
    setError("")
    try {
        const userdata = await authService.createAccount(data)
        if (userdata) {
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(login(userData));
            navigate("/")
            
        }
    } catch (error) {
        setError(error.message)
    }
}

  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <MDBCardBody className='p-5 text-center'>
          <p>Already have an account </p>

          <MDBBtn className='w-100 mb-4' size='md'>Sign In </MDBBtn>
          <h2 className="fw-bold mb-5">Sign up </h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' />
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

          {/* <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div> */}

          <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
          {/* 
          <div className="text-center">

            <p>or sign up with:</p> */}

          {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn> */}

          {/* </div> */}

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;
