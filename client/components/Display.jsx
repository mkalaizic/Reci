import Options from './IndexOptions.jsx';
import Ingredients from './Ingredients.jsx';
import React, { Component } from 'react';
import Menu from './MenuCreator.jsx';

let test;
const recipes = [];
const temp = [];

class Display extends Component {
  constructor(props) {
    super(props);
    this.state= {};
    this.getFromServer = this.getFromServer.bind(this);
  }
  
  componentDidMount() {
    this.state = {show:false}
  }

  getFromServer = ()=>{

    this.setState({show:true})
    fetch('/recipes')
    .then(data => data.json())
    .then(data=> {
     //console.log(data)})
      data.forEach(el => {
        if(!temp.includes(el.recipe_name)){
          recipes.push(<Ingredients name={el.recipe_name}/>);
          console.log(el.recipe_name);
          temp.push(el.recipe_name);
        }
       
      })})
  //   })
  //  // .then(data => (data[0].ingredient))
  //  //como hago para sacar la informacion de aca?
    .catch(err => console.log('DetailsModal: fetch /api: ERROR: ', err));
    
}

  render(){
    if(this.state.show) return(
      
      <div>
         <button id="home" onClick={() => this.setState({show:false})}>Main menu</button>
        <Menu />
        {recipes}
       
      </div>
    ) 
    else return(
      <div>
         <Options getFromServer = {this.getFromServer}/>
      </div>
      )};
    }
    
export default Display;