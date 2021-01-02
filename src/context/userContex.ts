import React from "react";
import { IUserContext } from "../model/IUserContex";
export const UserContext = React.createContext<IUserContext>({
	info: {
		name: "",
		age: 1,
		myRole: [],
		id: 2,
		isAdmin: true,
	},
});
