import React,{Component} from 'react';
import { IGrothContext } from './model/IGrothContext';
import { IUserContext } from './model/IUserContex';
import { UserContext } from './context/userContex';
import { GrothContext } from './context/grothContex ';
import { MyInfo } from './component/MyInfo';



export  class App extends Component {
  state={
    weight:"1" 
  }


  _info(): IUserContext {
		return {
			info: {
				name: "janyar",
				age: 1,
				myRole: ["childeren"],

				id: 2,
				isAdmin: true,
			},
		};
  }
  

	_groth(): IGrothContext {
		return {
			groth: {
				weight: this.state.weight,
				height: "10",
			},
			setWeight:(weight:string)=>{
        
        this.setState({
weight:weight
        })
			
			}
			
		};
	}
render(){
	console.log("parent")
  return(
<>

when we use 1 context

 <GrothContext.Provider value={this._groth()}>
 							<MyInfo />
					</GrothContext.Provider>




{/* when we use more than 1 context */}

{/* <UserContext.Provider value={this._info()}>
						<GrothContext.Provider value={this._groth()}>
						
							<MyInfo />
						</GrothContext.Provider>
					</UserContext.Provider> */}
</>
  )
}
}
