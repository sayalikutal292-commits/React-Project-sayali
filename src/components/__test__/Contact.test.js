import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should render a contact us component" , () =>{
    render(<Contact/>)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
})

test("Should load button in the component" , () =>{
    render(<Contact/>)
    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();
})
test("Should load input name in the component" , () =>{
    render(<Contact/>)
    const button = screen.getByPlaceholderText("Name") // returns react element
    expect(button).toBeInTheDocument();
})
test("Should load inputboxes" , () =>{
    render(<Contact/>)
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2)

})