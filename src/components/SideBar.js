import { FiChevronsDown } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [hidden, setHidden] = useState(true);

    const toggleDropdown = () => {
        setHidden(!hidden)
    }
    return (
        <>
            <div className="fixed min-h-full top-20 p-2  overflow-y-auto text-center bg-gray-800 hidden md:block sm:w-[175px] w-[175px] md:w-[200px]  lg:w-[300px] lg:left-0">
                <Link to="dashboard" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white">
                    <span className="text-[15px] ml-4 text-gray-200">DashBoard</span>
                </Link>
                <Link to="banks" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white">
                    <span className="text-[15px] ml-4 text-gray-200">Banks</span>
                </Link>
                <Link to="bank-account" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white">
                    <span className="text-[15px] ml-4 text-gray-200">Bank Accounts</span>
                </Link>

                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white" onClick={toggleDropdown}>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200">Investmensts</span>
                        <span className="text-sm rotate-180" id="arrow"></span>
                        <FiChevronsDown />
                    </div>
                </div>
                <ul id="submenu" className={hidden ? 'hidden' : 'text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 flex flex-col'}>
                    <Link to="investments/fixed-deposits" className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Fixed Deposits</Link>
                    <Link to="investments/recurring-deposits" className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Recurring Deposits</Link>
                </ul>

                <Link to="PPF-account" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white">
                    <span className="text-[15px] ml-4 text-gray-200">PPF Account</span>
                </Link>
                <Link to="taxes-paid" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white">
                    <span className="text-[15px] ml-4 text-gray-200">Taxes Paid</span>
                </Link>
                <Link to="upload-statements" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 hover:bg-blue-600 text-white">
                    <span className="text-[15px] ml-4 text-gray-200">Upload Statements</span>
                </Link>
            </div>


        </>
    )
}

export default SideBar;