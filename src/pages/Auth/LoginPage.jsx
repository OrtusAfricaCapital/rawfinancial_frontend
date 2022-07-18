import React from 'react';

import {Header, Login} from '../../components/Auth';

const LoginPage = () => {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  )
}

export default LoginPage;