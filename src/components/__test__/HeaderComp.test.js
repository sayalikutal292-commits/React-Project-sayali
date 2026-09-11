import { fireEvent, render, screen } from "@testing-library/react"
import HeaderComp from "../HeaderComp"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";


it("should load header comp with login button", () =>{
    render( 
        <BrowserRouter>
             <Provider store={appStore}>
                <HeaderComp/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"})
    expect(loginButton).toBeInTheDocument()
})

it("test onClick on login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComp></HeaderComp>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name : "Login"})
    fireEvent.click(loginButton)
     const logoutButton = screen.getByRole("button", {name : "Logout"})
    expect(logoutButton).toBeInTheDocument()
})