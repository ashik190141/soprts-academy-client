

const ClassInfo = ({ oneCls }) => {
    const { classImage, className, instructorName } = oneCls;
    return (
        <div>
            <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
                <figure><img src={classImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p className="text-xl font-semibold">{instructorName}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassInfo;