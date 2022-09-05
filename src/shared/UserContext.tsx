import { createContext } from "react";
import { UserContextType } from "./UserContextType";

export const UserContext = createContext<UserContextType | null>(null);
