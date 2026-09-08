const Contact = () =>{
    return (
        <div className="p-4 m-4">
            <h1 className="font-bold text-3xl"> Contact Us</h1>
            <form>
                <input type="text" className="border border-black rounded-md p-2 m-2" placeholder="Name"></input>
                <input type="text" className="border border-black rounded-md p-2 m-2" placeholder="message"></input>
                <button className="boder py-2 px-4 border border-gray-100 bg-gray-100 rounded-md cursor-pointer">Submit</button>
            </form>
        </div>
    )
}
export default Contact