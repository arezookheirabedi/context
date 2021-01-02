import React, { Component } from 'react'
import { UserContext } from '../context/userContex'
import { GrothContext } from '../context/grothContex '


export default class MyRole extends Component {
    render() {
        console.log("grandChild")
        return (
            <div className="row">
            <div className="col-6">
                <span>we are in myrole cmp to change the weight</span>
                <input
                value={this.context.groth.weight}
               onChange={(e)=>{this.context.setWeight(e.target.value)}} 
            />
             </div>
             </div>
        )
    }
}
MyRole.contextType=GrothContext