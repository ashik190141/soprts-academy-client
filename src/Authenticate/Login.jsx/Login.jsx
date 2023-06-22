import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useTitle from "../../Hooks/useTitle";
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                console.log(result);
                Swal.fire({
                title: 'Login Successful',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            navigate(from, {replace:true});    
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn now!</h1>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                    <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register("email", {required:true})}
                                placeholder="Email" className="input input-bordered w-64" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                                <input type="password" name="password" {...register("password",{required:true,minLength:6,maxLength:20})}
                                    placeholder="Password" className="input input-bordered w-64" />
                                {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-600">Minimum six characters are required</p>}
                        </div>

                        <div className='form-control mt-6'>
                            <input className="btn btn-primary uppercase w-64" type="submit" value="Login" />
                        </div>
                </form>

                <p className="mb-5 text-center"><small>New To Astha Sports Academy?</small><br />
                   <Link to="/signUp" className="uppercase text-orange-600">Go to Register</Link>
                </p>
                <SocialLogin></SocialLogin>    
                </div>
            </div>
        </div>
    );
};

export default Login;