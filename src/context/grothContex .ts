import React from "react";
import { IGrothContext } from "../model/IGrothContext";

export const GrothContext = React.createContext<IGrothContext>({
	groth: {
		weight: "1",
		height: "1",
	},
	setWeight: () => {}
}

);
