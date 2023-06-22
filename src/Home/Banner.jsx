import banner from '../assets/banner.jpg';
import { Rotate, Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className='bg-slate-400 max-w-7xl mx-auto p-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <Rotate>
                        <p className='text-xl font-semibold text-justify'>
                            At Astha Sports Academy, we believe that every individual possesses a unique talent and potential waiting to be discovered. Our academy is dedicated to nurturing and developing aspiring athletes, helping them transform their dreams into reality. Whether you are a budding sports enthusiast or a seasoned athlete, Astha is the ultimate destination for realizing your athletic ambitions.
                        </p>
                    </Rotate>
                </div>
                <div>
                    <Fade cascade damping={0.1}>
                        <img src={banner} alt="" className='w-[1000px]'/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Banner;