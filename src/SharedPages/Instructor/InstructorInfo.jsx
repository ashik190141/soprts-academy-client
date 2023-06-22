

const InstructorInfo = ({ instructor }) => {
    // console.log(instructor)
    const { name, image, email } = instructor;
    return (
        <div>
            <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-xl font-semibold">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorInfo;