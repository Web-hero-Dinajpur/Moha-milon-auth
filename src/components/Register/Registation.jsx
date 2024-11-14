import { Link } from "react-router-dom";


const Registation = () => {


    const handleRegister = e=>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card bg-base-100 p-6 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User</span>
                            </label>
                            <input type="email" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                <p className="ml-4 pb-4">All ready have an account? please <Link to='/login' className="font-semibold text-blue-800">Login Now</Link></p>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Registation;