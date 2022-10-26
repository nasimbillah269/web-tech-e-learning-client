import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Faq = () => {
    return (
        <Accordion className='w-50 mx-auto mt-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is HTML? How Dose HTML Work</Accordion.Header>
                <Accordion.Body>
                    HTML stands for HyperText Markup Language. It is used to design web pages using the markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages and markup language defines the text document within the tag that define the structure of web pages. HTML is used to create the structure of web pages that are displayed on the World Wide Web It contains Tags and Attributes that are used to design the web pages. Also, we can link multiple pages using Hyperlinks.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is Css ? How Dose Css Work</Accordion.Header>
                <Accordion.Body>
                    Cascading Style Sheets  is used to apply styles to web pages.  are fondly referred to as CSS. It is used to make web pages presentable. The reason for using this is to simplify the process of making web pages presentable. It allows you to apply styles on web pages. More importantly, it enables you to do this independently of the HTML that makes up each web page.
                    Styling is an essential property for any website. It increases the standards and overall look of the website that makes it easier for the user to interact with it. A website can be made without CSS, as styling is MUST since no user would want to interact with a dull and shabby website. So for knowing Web Development, learning CSS is mandatory.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is Bootstrap ? How Dose Bootstrap Work</Accordion.Header>
                <Accordion.Body>
                    Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Nowadays, the websites are perfect for all the browsers (IE, Firefox, and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones). All thanks to Bootstrap developers  Mark Otto and Jacob Thornton of Twitter, though it was later declared to be an open-source project.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is Javascript ? How Dose Javascript Work</Accordion.Header>
                <Accordion.Body>
                    is the worlds most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It can be used for Client-side as well as Server-side developments User interaction with web pages is enabled through JavaScript. On a web page, JavaScript has essentially no bounds. For web and mobile app development, developers can employ a variety of JavaScript frameworks. In comparison to other programming languages such as C++, Ruby, and Python, JavaScript is simple and easy to learn. The difficulty of learning JavaScript is primarily determined by your knowledge of other programming languages. Understanding HTML is the first step toward learning JavaScript. Because JavaScript is most commonly used as part of a web page, which can only be learned through HTML.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What is React ? How Dose React Work</Accordion.Header>
                <Accordion.Body>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.  denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state for example, a TabList component may store a variable corresponding to the currently open tab.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>What is Node ? How Dose Node Work</Accordion.Header>
                <Accordion.Body>
                    As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Faq;