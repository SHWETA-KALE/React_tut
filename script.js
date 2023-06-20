
// console.log(React)
//  console.log(ReactDOM)

//creating Reactdom element
// const Reactelement = React.createElement('h1',{}, 'Hello world');
//{}=>this indicates properties of the element 

//adding property 
// const Reactelement = React.createElement('div', {},
//     React.createElement('h1', {}, 'Hello World!'),
//     React.createElement('ul', {},
//         React.createElement('li', {}, "One"), //content
//         React.createElement('li', {}, "Two"),//content
//         React.createElement('li', {}, "Three"),//content
//     )
// )



// const nativeElement = document.createElement('h1');
// nativeElement.innerHTML = "helllo shwet";

// console.dir(nativeElement)
// console.log(Reactelement);

// document.body.appendChild(nativeElement) //prints helllo shwet
// document.body.appendChild(Reactelement) // gives error as append child only works on a node and this is a react element  

//now adding the ReactElement on the Dom
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Reactelement)
//Root can have only one child in react


// ------------------------------------------------------------------------------------------

//creating a navbar


const Navbar =
    React.createElement("nav", {},

        React.createElement('ul', {},
            React.createElement("li", {
                onClick: () => console.log("This is a Home Page"),
                className: "nav-link"
            }, "Home"),
            React.createElement("li", {}, "About"),
            React.createElement("li", {}, "Contact"),
        )
    );


const Content = React.createElement('div', {}, 'content');
const Footer = React.createElement('div', {}, 'footer');

const App = React.createElement('div', {}, Navbar, Content, Footer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App)