import React,{useState} from 'react'

export default function timePrice() {

    const [time,setTime] = useState()
    const [price,setPrice] = useState()
    

  return (
    <div className="mb-3">
            <label className="block mb-2 text-md font-bold text-gray-900">Service fee</label>
            <div className="flex border rounded-md overflow-hidden">
                <input type="number"
                    placeholder='Total Time'
                    name='totalTime'
                    onChange={(e)=> setTime(e.target.value)}
                    className="bg-gray-50 text-gray-900 text-sm w-full p-3 border-e"
                />
                <input type="number"
                    placeholder="Price"
                    name='Price'
                    onChange={(e)=> setPrice(e.target.value)}
                    className="bg-gray-50 text-gray-900 text-sm w-full p-3 " />
            </div>
            {/* Time:{time},price:{price} */}
        </div>
  )
}
