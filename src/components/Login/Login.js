import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('successfull')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
                toast.error(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('successfull')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
                toast.error(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('successfull')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
                toast.error(error.message)
            })
    }
    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-4 shadow-lg p-2 bg-light rounded'>
            <h5 className='text-center m-0 p-0 text-primary'>Please Login now!!</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <p className='fw-bold'><small>New To Web tech e learning? <Link className='text-decoration-none' to='/register'>Please Register</Link></small></p>
            <Button className='w-100' variant="primary" type="submit">
                Login
            </Button>
            <p className='text-center fw-bold text-danger'><u>OR</u></p>
            <Button onClick={handleGoogleSignIn} className='w-100 mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Google</Button>
            <Button onClick={handleGithubSignIn} className='w-100' variant="outline-secondary"><FaGithub></FaGithub> Github</Button>
        </Form>

    );
};

export default Login;