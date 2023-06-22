import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import useTitle from "../Hooks/useTitle";

const ManageClasses = () => {
    useTitle('Manage Classes');

    const {data: classes = [],refetch} = useQuery(['admin'], async () => {
        const res = await fetch('https://astha-sports-academy-server.vercel.app/admin')
        return res.json();
    })

    const handleMakeApproved = (id) => {
        fetch(`https://astha-sports-academy-server.vercel.app/admin/approved/${id}`, {
            method:'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `This Class is Approved`,
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }
        })
    }

    const handleMakeRejected = (id) => {
        fetch(`https://astha-sports-academy-server.vercel.app/admin/rejected/${id}`, {
            method:'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `This Class is Rejected`,
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }
        })
    }
    

    return (
        <div className="p-20 gap-5">
            {
                classes.map(oneClass => <div key={oneClass._id} className="border border-gray-800 rounded-xl mb-10">
                    <div className="grid grid-cols-2 items-center p-5">
                        <div>
                            <p className="text-3xl font-semibold pb-3">{oneClass.className}</p>
                            <p className="text-4xl font-semibold pb-3">{oneClass.instructorName}</p>
                            <p className="text-xl pb-3">{oneClass.instructorEmail}</p>
                            <p className="text-xl pb-3">{oneClass.availableSeat} Available Seats</p>
                            <p className="text-xl pb-3">{oneClass.price} TK</p>
                            <p className="text-xl pb-3">Status: {oneClass.status}</p>
                            <div className="flex">
                                <button onClick={()=> handleMakeApproved(oneClass._id)} disabled={oneClass.status === 'Approved' || oneClass.status == 'Rejected'} className="btn btn-success mr-5">Accepted</button>
                                <button onClick={()=> handleMakeRejected(oneClass._id)} disabled={oneClass.status === 'Approved' || oneClass.status == 'Rejected'} className="btn btn-error mr-5">Rejected</button>
                                <Link to={`/dashboard/feedback/${oneClass._id}`}><button className="btn btn-warning">Feedback</button></Link>
                            </div>
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

export default ManageClasses;