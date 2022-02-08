import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Settings from './components/Settings';


const App = () => {

    const [settings, setProjectInfo] = useState('');
    const [hasSettings, setSettings] = useState(false);
    const [count, setCount] = useState(0);
    const [completed, setCompletedState] = useState(false);
    
    useEffect(() => {

        if (hasSettings && !completed) {
            window.addEventListener("keyup", keyPress);
            return () => window.removeEventListener("keyup", keyPress);
        }
    });

    const keyPress = (event) => {
        if (event.code == "Space") {
            updateCount(count)
        }
    }

    const updateCount = (current) => {

        setCount(current + 1);

        if (count + 1 == settings.end_rows) {
            setCompletedState(true);
        } 
    }

    const resetState = () => {
        setSettings(false);
        setProjectInfo('');
        setCount(0);
        setCompletedState(false);
    }

    return (
        <div className='container py-5'>
            <h1 className='text-center mb-4'>Knitting Row Counter</h1>
            {!hasSettings ? 
                <div className='card p-5 w-50 d-block m-auto'>
                    <h5 className='text-center'>Create a project</h5>
                    <Settings 
                        project={(data) => setProjectInfo(data)}
                        settings={(val) => setSettings(val)}
                        counter={(val) => setCount(count + val)}
                    />
                </div>
                :
                <div className='card p-5 w-50 d-block m-auto'>
                    <h5 className='text-center'>{settings.project_name}</h5>
                    <Counter count={count} end={settings.end_rows} />
                    {!completed ?
                        <p onClick={() => updateCount(count)} className='btn btn-primary w-100'>Add Row</p>
                        :
                        <p className='alert alert-success w-100 text-center'>Project Completed!</p>
                    }
                    <p className='btn btn-secondary w-100' onClick={resetState}>Start New Project</p>
                </div>
            }
        </div>
    )
};

export default App;
