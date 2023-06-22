import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useTitle from "../Hooks/useTitle";


const EnrolledClass = () => {
    useTitle('Enrolled Class');

    const [enrollClasses, setEnrollClasses] = useState([]);
    const { user } = useAuth();
    const url = `https://astha-sports-academy-server.vercel.app/payments/specific?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEnrollClasses(data));
    }, [url])

    return (
        <div className="p-20 gap-5">
            <h2 className="text-3xl font-semibold my-4 text-center mt-10 mb-10">You Have Enrolled {enrollClasses.length} classes</h2>
            <div>
                {
                    enrollClasses.map(oneClass => <div key={oneClass._id} className="border border-gray-800 rounded-xl mb-10">
                        <div className="grid grid-cols-2 items-center p-5">
                            <div>
                                <p className="text-3xl font-semibold pb-3">Class Name: {oneClass.className}</p>
                                <p className="text-4xl font-semibold pb-3">Instructor Name: {oneClass.instructorName}</p>
                                <p className="text-xl pb-3">{oneClass.price}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={oneClass.classImage} alt="" className="w-[400px] rounded-lg py-5"/>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EnrolledClass;