import {createRoot} from "react-dom/client";
import React from "react";

//Pet Component -> child
const Pet = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    );
    
};
//App Component -> parent
const App = () => {
    return(
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese"/>
            <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
            <Pet name="Doink" animal="Cat" breed="Mixed"/>
        </div>
    )
}
// Get Root Element
const container = document.getElementById('root');
// Create Root 
const root = createRoot(container);
// Render
root.render(<App/>);