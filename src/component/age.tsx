import React, { Component } from 'react';
import MyRole from './myRole';
import { GrothContext } from '../context/grothContex ';

export  class Age extends Component {
    render() {
        return (
            <div>
         <div>
             "we are in age cmp we can see weight changes hear"
             </div>       
    <input
    value={this.context.groth.weight}
    />       



            </div>
        )
    }
}
Age.contextType=GrothContext

/* 
while we have more than 1 context

     <UserContext.Consumer>
                    (info)=>{
             <input
             value={info.age}/>
                    }
   
                </UserContext.Consumer>
*/