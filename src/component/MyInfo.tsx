import React, { Component } from "react";
import { GrothContext } from "../context/grothContex ";
import { UserContext } from "../context/userContex";
import { IGrothContext } from "../model/IGrothContext";
import { IUserContext } from "../model/IUserContex";
import { Age } from "./age";
import MyRole from "./myRole";

export class MyInfo extends Component {
	render() {
		console.log("child")
		return (
			<div>
				
				{/* 
				when we use more than 1 context
				*/}
				{/* <GrothContext.Consumer>
					{(groth:IGrothContext) => {
						return (
							<UserContext.Consumer>
								{(info: IUserContext) => {
									return (
										<>
	
										<button >
											{groth.groth.weight}
										</button>
											 <input value={info.info.name}  />
											<input value={groth.groth.weight} onChange={(e)=>{groth.setWeight(e.target.value)}} /> 
										</>
									);
								}}
							</UserContext.Consumer>
						);
					}}
				</GrothContext.Consumer> */}



{/* when we use 1 context */}

				 {/* <input
                value={this.context.groth.weight}/> */}
 <Age/> 
<MyRole/>

			</div>
		);
	}
}




// when we use 1 context
MyInfo.contextType=GrothContext 
