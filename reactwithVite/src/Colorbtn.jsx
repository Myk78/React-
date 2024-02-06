import React from 'react'

function Colorbtn() {
  return (
    <div className="relative overflow-x-auto">
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <button className="px-6 py-3 mr-1"> Blue</button>
                <button className="px-6 py-3 ml-2"> Blue</button>
            </tr>
        </thead>
     </table>
    </div>
  )
}

export default Colorbtn