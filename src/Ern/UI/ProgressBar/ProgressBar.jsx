import TextP from '../TextP/TextP';
import './ProgressBar.scss';

const ProgressBar = ({ label, percentage }) => {
    return (
        <div className="progress-bar">
            <div className='progress-bar-child'>
                <div className="progress">
                    <div className="filler" style={{ width: `${percentage}%` }}></div>
                </div>
                <div className="percentage">{percentage}%</div>
            </div>
            <div className="label"><TextP p={label} /></div>
        </div>
    );
};
export default ProgressBar;