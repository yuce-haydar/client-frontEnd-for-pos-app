import React from 'react'

const StatistiCard = ({img,title,value}) => {
  return (
    <div>
         <div className="card-item bg-gray-800 p-8 rounded-lg">
              <div className="flex gap-x-4">
                <div className="rounded-full bg-white w-16 h-16 p-3">
                  <img src={img} alt="" />
                </div>
                <div className="text-white">
                  <p className="mb-2 text-lg font-medium text-gray-400">{title}</p>
                  <p className="text-xl font-semibold text-gray-200">{value}</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default StatistiCard