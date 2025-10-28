import React from "react";
import TopNavbar from "./component/TopNavbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <TopNavbar />
      <Sidebar />

      <main className="ml-52 pt-20 px-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          Welcome to CyberBank Dashboard
        </h2>
        <p className="text-gray-700 mb-6">
          Select an option from the sidebar to view more details.
        </p>

        <div className="flex justify-start items-center gap-16 mt-10">
          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://img.icons8.com/color/96/bank.png"
              alt="Check Balance"
              className="w-20 h-20 hover:scale-110 transition-transform drop-shadow-md"
            />
            <span className="text-blue-800 font-semibold text-sm">
              Check Balance
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://img.icons8.com/color/96/money-transfer.png"
              alt="Transfer Money"
              className="w-20 h-20 hover:scale-110 transition-transform drop-shadow-md"
            />
            <span className="text-blue-800 font-semibold text-sm">
              Transfer Money
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://img.icons8.com/color/96/bill.png"
              alt="Pay Bills"
              className="w-20 h-20 hover:scale-110 transition-transform drop-shadow-md"
            />
            <span className="text-blue-800 font-semibold text-sm">
              Pay Bills
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
