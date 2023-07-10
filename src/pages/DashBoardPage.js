import Records from '../records.json';
import { useState, useEffect } from "react";

const DashBoardPage = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
    return (
        <>
            <div className="flex relative top-24  left-1 lg:left-80 sm:left-10 md:left-48  ">
                <div className="">
                    <div className="relative m-5 ">
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96"
                            value={selectedValue}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select an option</option>
                            {Records.map((record) => (
                                <option key={record.id} value={record.id}>
                                    {record.account_number}
                                </option>
                            ))}
                        </select>

                        {selectedValue && (
                            <div className="mt-5  w-full  bg-white border rounded-xl shadow-lg">
                                {Records.map((record) => {
                                    if (record.id == selectedValue) {
                                        return (
                                            <div key={record.id} className="p-4  flex flex-wrap text-gray-800">
                                                <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                                                    <h1>Account Number: <span className="font-bold">{record.account_number}</span></h1>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                                                    <h1>Linked Bank Acconut: <span className="font-bold">{record.linked_bank_account}</span></h1>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                                                    <h1>Status: <span className="font-bold text-red-700">{record.status}</span></h1>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                                                    <h1>Bank Code: <span className="font-bold">{record.bank_code}</span></h1>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                                                    <h1>Bank Name: <span className="font-bold">{record.bank_name}</span></h1>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                                                    <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}

                        {selectedValue && (
                            <div className="mt-10">
                                {Records.map((record) => {
                                    if (record.id == selectedValue) {
                                        return (
                                            <div key={record.id} className=" flex flex-wrap text-gray-800">
                                                <div className="w-full sm:w-1/2 md:w-1/3  pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Avalible Balance:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.available_balance}</span>
                                                </div>
                                                <div className="w-full  sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Principle Ammount:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.principle_ammount}</span>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Interest Earned:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.interest_earned}</span>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Monthly Deposits:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.monthly_deposite}</span>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Interest Rate:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.interest_rate}</span>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Tenure:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.tenure}</span>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Maturity Ammount:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.maturity_ammount}</span>
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 pl-3 border-4 h-24 rounded-lg flex flex-col justify-around">
                                                    <h1>Tax Paid:</h1>
                                                    <span className="font-bold text-xl text-blue-500">{record.tax_paid}</span>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardPage;