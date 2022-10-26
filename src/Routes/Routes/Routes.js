import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheckOut/CheckOut";
import Course from "../../components/Course/Course";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Faq from "../../components/Faq/Faq";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import PrivetRoute from "../PriventRoute/PrivetRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Course></Course>

            },
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Course></Course>

            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/course/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/course/checkout/${params.id}`),
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }

        ]

    },





]);

export default routes;