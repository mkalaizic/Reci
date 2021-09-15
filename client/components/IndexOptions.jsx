
import React, { Component } from 'react';
    //will create a function redirect that will reroute to the corresponding site
    //will create classname menu to give style to the buttons
    /* <button id= {props.market.marketId} onClick = {(e) => {
        e.preventDefault();
        const pressed = e.target.id;
        props.redirect(Number(pressed));</button>
*/
///* <button onClick = {() => {props.addRecipes()}}>Look up recipe</button> */
//onClick= {() => location.href='/recipes
//let test;
class Options extends Component {
  constructor(props) {
    super(props);
  }
  // getFromServer = ()=>{
  //   fetch('/recipes')
  //   .then(data => json(data))
  //   .then(data => {
  //     test = data; return test;}
  //     )
  //   .then(console.log(test))
  //   .catch(error => 'getDataFromServer: ERROR: ', error)
  // }
  render(){
    return(
        <div className="menu">
        <button>Look up recipe</button>
        <button>Add or edit recipes</button>
        <button>Shopping list</button>

        </div>
      )};
    }
    
export default Options;