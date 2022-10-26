import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h4>1.  what is cors</h4>
                <p>Cross-Origin Resource Sharing CORS is an HTTP-based security mechanism controlled and enforced by the client web browser. It allows a service API to indicate any origin other than its own from which the client can request resources. CORS is used to explicitly allow some cross-origin requests while rejecting others.
                    Everything starts on the client side, before sending the main request. The client sends a CORS preflight request to a service for resources with parameters in HTTP headers CORS headers. The service responses using the same headers with different or the same values. The client decides, based on a CORS preflight response, if he can or cannot send the main request to the service. The web browser client will throw an error if the response does not meet the requirements of CORS preflight.

                    CORS preflight requests are sent regardless of the used libraries or frameworks to send requests from web browser. That's why you won't need to conform CORS requirements when working with API from your backend application.
                </p>
            </div>
            <div>
                <h4>2.Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div>
                <h4>3. How does the private route work?</h4>
                <p>The react private route component renders child components  children  if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property Private Routes in React Router also called Protected Routes require a user being authorized to visit a route read: page. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized which means in this case being authenticated. Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            </div>
            <div>
                <h4>4.  What is Node? How does Node work?</h4>
                <p>  As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive  Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </div>
    );
};

export default Blog;