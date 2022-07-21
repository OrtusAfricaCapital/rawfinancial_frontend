import React from 'react'
import { earningData, lineChartData } from '../assets/dummy';
import { LineChart, BarChart, PieChart } from '../components/Charts';
import SelectDropdown from '../components/SelectDropdown';


const Dashboard = () => {
    return (
        <div className="mt-20">
            <div className='flex ml-32 mb-10'>
                <div className='w-60'>
                    <SelectDropdown />
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="flex m-3 flex-wrap justify-center gap-6 items-center">
                    {earningData.map((item) => (
                    <div key={item.title} className="bg-white h-44 dark:text-gray-200 border-2 dark:border-gray-600 dark:bg-slate-800 md:w-56  p-4 pt-9 rounded-lg ">
                        <button
                        type="button"
                        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                        >
                        {item.icon}
                        </button>
                        <p className="mt-3">
                        <span className="text-lg font-semibold">{item.amount}</span>
                        <span className={`text-sm text-${item.pcColor} ml-2`}>
                            {item.percentage}
                        </span>
                        </p>
                        <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-10 m-4 flex-wrap justify-center">
            <div className="bg-white dark:text-gray-200 border-2 dark:border-gray-600 dark:bg-slate-800 p-6 rounded-lg w-10/12 md:w-760">
                <div className="flex justify-between items-center gap-2 mb-10">
                    <p className="text-xl font-semibold">Loans {'&'} Repayments Overview</p>
                    {/* <DropDown currentMode={currentMode} /> */}
                </div>
                <div className="md:w-full overflow-auto">
                    <LineChart data={lineChartData} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;
