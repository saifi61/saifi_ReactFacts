let root = document.querySelector("#root");

function Header() {
    return (
        <nav>
            <img src="./icon/logo_dark.svg" width="60px"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

function Main() {
    return (
        <main>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function App() {
    return (
        <div>
            <Header />  
            <Main />
        </div>
    )
}

ReactDOM.render(<App />,root);