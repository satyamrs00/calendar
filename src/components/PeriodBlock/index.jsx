const PeriodBlock = ({ period }) => {
    return (
        <div className='w-11/12 p-1 rounded text-start' style={{
            color: period?.color,
            backgroundColor: `${period?.color}2A`,
        }}>
            <div>{period?.name}</div>
            <div className="text-xs">
                {`${period?.start}:00 - ${period?.end}:00`}
            </div>
            
            {
                period?.activities?.map(activity => (
                    <div className="text-xs text-white rounded p-1 mt-1" style={{
                        backgroundColor: period?.color,
                    }}>

                        {activity}
                    </div>

                ))
            }
        </div>
    )
}

export default PeriodBlock