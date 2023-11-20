import React, { useState } from 'react'


export default function input({ index }) {

    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()

    const convertToMinutes = (hours,minutes) =>{
        const hoursInMinute = hours * 60 + (minutes || 0)
        return isNaN(hoursInMinute) ? 0: hoursInMinute
    }

    const handleTimeChange  = (e, name) => {
        const time = e.target.value

        const [hours, minutes] = time.toString().split('.').map(Number);

        if (!isNaN(time)) {
            if (name === 'start') {
                setStartTime(convertToMinutes(hours,minutes));
            } else if (name === 'end') {
                setEndTime(convertToMinutes(hours,minutes));
            }
        }
    }


    return (
        <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-600"> - Person {index}</label>
            <div className="flex border rounded-md overflow-hidden">
                <input type="number"
                    placeholder='StartTime'
                    name='start'
                    onChange={(e)=>handleTimeChange (e,'start')}
                    className="bg-gray-50 text-gray-900 text-sm w-full p-3 border-e"
                />
                <input type="number"
                    placeholder="EndTime"
                    name='end'
                    onChange={(e)=>handleTimeChange (e,'end')} 
                    className="bg-gray-50 text-gray-900 text-sm w-full p-3 " />
            </div>
            {/* startTime:{startTime},endTime:{endTime} */}
        </div>
    )
}
