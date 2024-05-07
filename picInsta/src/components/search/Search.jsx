import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon,
    //  MDBAlert
    //  , 
     MDBBtn } from 'mdb-react-ui-kit';

export default function Search() {
  const [showSearchAlert, setShowSearchAlert] = useState(false);

  return (
    <>
      <MDBInputGroup>
        <MDBInput label='Search' />
        <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>
{/* 
      <MDBAlert delay={1000} position='top-right' autohide appendToBody show={showSearchAlert}>
        Search!
      </MDBAlert> */}
    </>
  );
}