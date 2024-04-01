import React from "react";
import ReactDOM from "react-dom";

//Pet Component -> child
const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h2', {}, props.name),
        React.createElement('h3', {}, props.animal),
        React.createElement('h3', {}, props.breed)
    ])
}
//App Component -> parent
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt Me'),
        React.createElement(Pet, {name: 'Luna', animal: 'Dog', breed: 'Havanas'}),
        React.createElement(Pet, {name: 'pepper', animal: 'Bird', breed: 'Cockatiel'}),
        React.createElement(Pet, {name: 'Doink', animal: 'Cat', breed: 'Mix'}),
    ]);
}
// Get Root Element
const container = document.getElementById('root');
// Create Root 
const root = ReactDOM.createRoot(container);
// Render
root.render(React.createElement(App));