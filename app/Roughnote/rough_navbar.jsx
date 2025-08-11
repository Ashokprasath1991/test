import react from 'react';



const Roughnote = () => {

    const employees = [
        {
            image: 'https://via.placeholder.com/80x80.png?text=LS',
            name: 'Luke Short',
            role: 'UI/UX Designer',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
            tasks: '04',
            rating: '4.5',
            projects: '04'
        },
        {
            image: 'https://via.placeholder.com/80x80.png?text=LP',
            name: 'Lillian Powell',
            role: 'Quality Assurance',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
            tasks: '04',
            rating: '4.5',
            projects: '04'
        },
        {
            image: 'https://via.placeholder.com/80x80.png?text=RP',
            name: 'Rachel Parsons',
            role: 'Website Designer',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
            tasks: '04',
            rating: '4.5',
            projects: '04'
        },
        {
            image: 'https://via.placeholder.com/80x80.png?text=JH',
            name: 'John Hardacre',
            role: 'Developer',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
            tasks: '04',
            rating: '4.5',
            projects: '04'
        }
    ];


    return (
        <>
            <div className="container py-4">
                <div className="row g-4">
                    {employees.map((emp, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card shadow-sm border-0 rounded-3 p-3 h-100">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={emp.image}
                                        alt={emp.name}
                                        className="rounded-circle me-3"
                                        width="80"
                                        height="80"
                                    />
                                    <div>
                                        <h5 className="mb-1">{emp.name}</h5>
                                        <small className="text-muted">{emp.role}</small>
                                    </div>
                                </div>
                                <p className="text-muted">{emp.description}</p>
                                <div className="d-flex justify-content-between mt-auto">
                                    <span><strong>Tasks:</strong> {emp.tasks}</span>
                                    <span><strong>Rating:</strong> {emp.rating}</span>
                                    <span><strong>Projects:</strong> {emp.projects}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};


export default Roughnote;