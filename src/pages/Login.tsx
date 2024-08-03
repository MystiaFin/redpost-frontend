import Logo from "../assets/redpost.svg";

function Login() {
    return(
        <div className="bg-black min-h-screen text-white flex justify-center items-center">
            <div className="pr-10">
                <img src={Logo} className="h-16 mb-4"/>
                <p className="text-right text-xl">
                    A <span className="text-red-500 font-bold">Hybrid</span> of <br>
                    </br>Many <span className="text-decoration-line: underline underline-offset-4">Social Media</span>
                </p>
            </div>
            <div className="w-96 flex flex-col pl-10 gap-4 border-l-2">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Welcome back!
                </h1>
                <input type="text" placeholder="username" className="rounded-full bg-gray-900 p-4 py-2 focus:outline-none" />
                <input type="password" placeholder="password" className="rounded-full bg-gray-900 p-4 py-2 focus:outline-none" />
                <button className="bg-red-600 p-2 px-4 rounded-2xl">Login</button>
                <p className="text-gray-400">
                    don't have an account? <u>sign up!</u>
                </p>
            </div>
        </div>
    );
}
export default Login