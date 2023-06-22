import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useTitle from "../Hooks/useTitle";


const MyClass = () => {
    useTitle("My Class");
    const [classes, setClasses] = useState([]);
    const { user } = useAuth();
    const url = `https://astha-sports-academy-server.vercel.app/specific?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [url])

    return (
        <div className="p-20 gap-5">
            {
                classes.map(oneClass => <div key={oneClass._id} className="border border-gray-800 rounded-xl mb-10">
                    <div className="grid grid-cols-2 items-center p-5">
                        <div>
                            <p className="text-3xl font-semibold pb-3">{oneClass.className}</p>
                            <p className="text-4xl font-semibold pb-3">{oneClass.instructorName}</p>
                            <p className="text-xl pb-3">{oneClass.instructorEmail}</p>
                            <p className="text-xl pb-3">Available Seats: {oneClass.availableSeat}</p>
                            <p className="text-xl pb-3">Enrolled Student Number: {oneClass.enrolledNumber}</p>
                            <p className="text-xl pb-3">{oneClass.price}</p>
                            <p className="text-xl pb-3">Status: {oneClass.status}</p>
                            {oneClass.feedback && <p className="text-xl pb-3">Feedback: {oneClass.feedback}</p>}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={oneClass.classImage} alt="" className="w-[400px] rounded-xl py-5"/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyClass;