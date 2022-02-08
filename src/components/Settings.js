import React from 'react';

const Settings = ({ settings, project, counter }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a data object 
        let data = {
            project_name: event.target.elements.name.value,
            start_rows: parseInt(event.target.elements.start.value),
            end_rows: parseInt(event.target.elements.end.value),
        }
        
        project(data);
        settings(true);
        counter(data.start_rows)
    }

    return (
        <div className='form-settings'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label for="start-row" className="form-label">End Row</label>
                    <input type="number" className="form-control" name="start" id="enstartd-row" placeholder="e.g. 1" required />
                </div>
                <div className='mb-3'>
                    <label for="end-row" className="form-label">End Row</label>
                    <input type="number" className="form-control" name="end" id="end-row" placeholder="e.g. 100" required />
                </div>
                <div className='mb-3'>
                    <label for="project-name" className="form-label">Project Name</label>
                    <input type="text" className="form-control" name="name" id="project-name" placeholder="My first project" required />
                </div>
                <div className='mb-3'>
                    <input type="submit" className="btn btn-secondary w-100" value="Get Started!" />
                </div>
            </form>
        </div>
    );
};

export default Settings;
