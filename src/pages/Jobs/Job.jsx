import { IoLocationOutline, IoTimerOutline } from 'react-icons/io5';

const Job = ({ job }) => {
    return (
        <div className='border-[2px] border-[#f0f0f0] flex flex-col justify-center p-[30px] rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='h-[60px] w-[60px] border-[1px] border-[#f0f0f0] rounded-md flex items-center justify-center'>
                    <img className='h-[50px] w-[50px]' src={job?.companyLogo} alt="" />
                </div>
                <div>
                    <h4>{job?.companyName}</h4>
                    <span className='flex items-center gap-[5px]'>
                        <IoTimerOutline />
                        <p>{job?.releaseDate}</p>
                    </span>
                </div>
                <span>
                    {job?.jobType}
                </span>
            </div>
            <h4>{job?.jobTitle}</h4>
            <span className='flex items-center gap-[5px]'>
                <IoLocationOutline />
                <p>{job?.country}</p>
            </span>
        </div>
    );
};

export default Job;