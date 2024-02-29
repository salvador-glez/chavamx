/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css'
import Footer from './Footer'

function App() {
    return (
        <>
            <div id="header">
                <h1>Salvador Gonzalez</h1>
            </div>
            <div id="nav">
                <a href="#">Home</a> |<a href="#">Contact</a> |
                <a href="#">Blog</a>
            </div>
            <div id="content">
                <h2>Welcome to my personal page!</h2>
                <p>
                    Hi, I&apos;m a developer with over 10 years of experience. I
                    specialize in web development and have worked on a variety
                    of projects, from small personal websites to large corporate
                    applications.
                </p>
                <p>
                    Check out my portfolio to see some of my recent work, or get
                    in touch if you have a project you&apos;d like to discuss.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default App
