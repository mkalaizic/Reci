import Options from './IndexOptions.jsx';
import Ingredients from './Ingredients.jsx';
import React, { Component } from 'react';
import Menu from './MenuCreator.jsx';
import FormAddOrEdit from './formAddOrEdit.jsx';

// let test;
// const recipes = [];
// const temp = [];

class Display extends Component {
  constructor(props) {
    super(props);
    this.state= {};
    this.getFromServer = this.getFromServer.bind(this);
    this.completeForm = this.completeForm.bind(this);
  }
  
  componentDidMount() {
    this.state = {
                  show:'home',
                  test:[],
                  }
  }

  getFromServer = ()=>{

    // this.setState({show:'search'})
  
    fetch('/recipes')
    .then(res => res.json())
    .then(data=> {
      this.setState({
        test: data,
        show: 'search'
      })
     })
   // .then(data => (data[0].ingredient))
   //como hago para sacar la informacion de aca?
    .catch(err => console.log('DetailsModal: fetch /api: ERROR: ', err));
    
}


completeForm = () => {
  this.setState({show:'addOrEdit'})
}

  render(){
    
    if(this.state.show==='search') 
    {
      const recipes = this.state.test.map((el)=>(<Ingredients recipeName = {el} />))
      
      return(

      <div>
        
         <button id="home" onClick={() => this.setState({show:'home'})}>Main menu</button>
         
        <Menu />
        
        {recipes}
       
      </div>
      ) 
      }

    else if(this.state.show === 'addOrEdit') return (
      <div>
        <button id="home" onClick={() => this.setState({show:'home'})}>Main menu</button>
        <FormAddOrEdit />
      </div>
    )
    else return(
      <div>
         <Options getFromServer = {this.getFromServer} completeForm = {this.completeForm}/>
      </div>
      )};
    }
    
export default Display;