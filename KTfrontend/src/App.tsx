import {router} from "./config/ReactRrouterConfig.tsx";
import {RouterProvider} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import {UserData} from "./data/UserData.tsx";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"

export const LoginUserContext = createContext<UserData | null | undefined>(undefined)

function App() {
    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, []);

    return (
        <>
            <LoginUserContext.Provider value={loginUser}>
                <RouterProvider router={router}/>
            </LoginUserContext.Provider>
        </>
    )
}

export default App
