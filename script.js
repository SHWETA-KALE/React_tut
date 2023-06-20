
// console.log(React)
//  console.log(ReactDOM)

//creating Reactdom element
// const Reactelement = React.createElement('h1',{}, 'Hello world');
//{}=>this indicates properties of the element 

//adding property 
const Reactelement = React.createElement('h1', {
    className: "title",
    onClick: () => console.log("clicked")
}, 'Hello world',
    React.createElement('ul', {},
        React.createElement('li', {}, "One"), //content
        React.createElement('li', {}, "Two"),//content
        React.createElement('li', {}, "Three"),//content
    )
)



const nativeElement = document.createElement('h1');
nativeElement.innerHTML = "helllo shwet";

// console.dir(nativeElement)
// console.log(Reactelement);

// document.body.appendChild(nativeElement) //prints helllo shwet
// document.body.appendChild(Reactelement) // gives error as append child only works on a node and this is a react element  

//now adding the ReactElement on the Dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Reactelement)
//Root can have only one child in react