import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserProfile(name, photoURL)
                toast.success('successfull')
                form.reset()
            })
            .catch(error => {
                console.error('error', error)
                toast.error(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('update profile')
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (

        <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-4 shadow-lg p-2 bg-light rounded'>
            <h5 className='text-center m-0 p-0 text-primary'>Please Register now!!</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="photoURL" name="photo" placeholder="photoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <p className='m-0 p-0'><small> Alrady have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link></small></p>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <p className='text-center fw-bold text-danger'><u>OR</u></p>
            <Button onClick={handleGoogleSignIn} className='w-100 mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Google</Button>
            <Button onClick={handleGithubSignIn} className='w-100' variant="outline-secondary"><FaGithub></FaGithub> Github</Button>
        </Form>

    );
};

export default Register;