import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from './components/DashboardLayout'
import AuthLayout from './components/AuthLayout'
import Dashboard from './pages/Dashboard'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Borrowers from './pages/Borrowers'
import Branches from './pages/Branches'
import LoanOfficers from './pages/LoanOfficers'
import Repayments from './pages/Repayments'
import Loans from './pages/Loans'
import AdminSettings from './pages/AdminSettings'
import Investors from './pages/Investors'

import {AuthContext} from './contexts/AuthContext';


const AuthPage = ({loggedInState}) => (
    <BrowserRouter>
        <AuthLayout>
            <Routes>
                <Route path="*" element={!loggedInState && <Navigate to='/'/>} />
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </AuthLayout>
    </BrowserRouter>
)

const DashboardPage = () => (
    <BrowserRouter>
        <DashboardLayout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/admin-settings' element={<AdminSettings />} />
                <Route path='/borrowers' element={<Borrowers />} />
                <Route path='/branches' element={<Branches />} />
                <Route path='/investors' element={<Investors />} />
                <Route path='/loan-officers' element={<LoanOfficers />} />
                <Route path='/repayments' element={<Repayments />} />
                <Route path='/loans' element={<Loans />} />
            </Routes>
        </DashboardLayout>
    </BrowserRouter>
)

function App() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    return isLoggedIn ? <DashboardPage /> : <AuthPage loggedInState={isLoggedIn} />;
}

export default App
