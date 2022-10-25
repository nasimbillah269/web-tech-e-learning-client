import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Course from "../../components/Course/Course";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Faq from "../../components/Faq/Faq";
import Main from "../../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Course></Course>

            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }

]);

export default routes;