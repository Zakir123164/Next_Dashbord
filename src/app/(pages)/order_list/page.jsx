"use client";

import { useState, useMemo } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const ordersData = [
  { id: "#25431", name: "Jerome Bell", avatar: "/avatars/1.png", method: "American Express", date: "2022-10-17", status: "Delivered", amount: "$106.58", category: "Laptops" },
  { id: "#25431", name: "Cody Fisher", avatar: "/avatars/2.png", method: "PayPal", date: "2022-02-01", status: "Pending", amount: "$710.68", category: "Mobile phones" },
  { id: "#25431", name: "Wade Warren", avatar: "/avatars/3.png", method: "Check", date: "2022-09-08", status: "Delivered", amount: "$406.27", category: "Desktops" },
  { id: "#25431", name: "Savannah Nguyen", avatar: "/avatars/4.png", method: "PayPal", date: "2022-10-17", status: "Canceled", amount: "$943.65", category: "Networking" },
  { id: "#25431", name: "Savannah Nguyen", avatar: "/avatars/4.png", method: "Visa", date: "2022-09-21", status: "Canceled", amount: "$943.65", category: "Accessories" },
  { id: "#25431", name: "Kathryn Murphy", avatar: "/avatars/5.png", method: "Visa", date: "2022-10-22", status: "Delivered", amount: "$450.54", category: "Portable storage" },
  { id: "#25431", name: "Kathryn Murphy", avatar: "/avatars/5.png", method: "MasterCard", date: "2022-09-08", status: "Delivered", amount: "$450.54", category: "Desktops" },
  { id: "#25431", name: "Eleanor Pena", avatar: "/avatars/6.png", method: "PayPal", date: "2022-10-17", status: "Pending", amount: "$219.78", category: "Laptops" },
  { id: "#25431", name: "Ronald Richards", avatar: "/avatars/7.png", method: "Visa", date: "2022-05-24", status: "Pending", amount: "$219.78", category: "Networking" },
  { id: "#25431", name: "Floyd Miles", avatar: "/avatars/8.png", method: "Cash", date: "2022-09-21", status: "Canceled", amount: "$576.28", category: "Accessories" },
];

const statusColors = {
  Delivered: "text-green-500",
  Pending: "text-yellow-500",
  Canceled: "text-red-500",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");
  const [menuIndex, setMenuIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // 🔎 Filtering Logic
  const filteredOrders = useMemo(() => {
    return ordersData.filter(order => {
      const matchSearch =
        order.name.toLowerCase().includes(search.toLowerCase()) ||
        order.id.includes(search);

      const matchCategory =
        category === "All" || order.category === category;

      const matchStatus =
        status === "All" || order.status === status;

      const matchDate =
        !date || order.date === date;

      return matchSearch && matchCategory && matchStatus && matchDate;
    });
  }, [search, category, status, date]);

  // 📄 Pagination Logic
  const totalPages = Math.ceil(filteredOrders.length / pageSize);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* LEFT SIDEBAR */}
    

      {/* MAIN CONTENT */}
      <main className="flex-1 p-7">
        <h1 className="text-2xl font-semibold mb-4">Orders List</h1>
        
  <div className="flex items-center text-sm text-gray-500 mb-6">
    <span className="hover:text-purple-600 cursor-pointer">Home</span>
    <span className="mx-2">›</span>
    <span className="hover:text-purple-600 cursor-pointer">Order List</span>
 </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">

          {/* Search bar */}
          <div className="flex items-center border bg-white px-3 py-2 rounded-lg">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search order..."
              className="ml-2 outline-none"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Category */}
          <select
            className="border px-4 py-2 rounded-lg"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Laptops</option>
            <option>Mobile phones</option>
            <option>Desktops</option>
            <option>Accessories</option>
            <option>Portable storage</option>
            <option>Networking</option>
          </select>

          {/* Date Filter */}
          <input
            type="date"
            className="border px-4 py-2 rounded-lg"
            value={date}
            onChange={e => setDate(e.target.value)}
          />

          {/* Status */}
          <select
            className="border px-4 py-2 rounded-lg"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option>All</option>
            <option>Delivered</option>
            <option>Pending</option>
            <option>Canceled</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="p-3"><input type="checkbox" /></th>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedOrders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>

                  <td className="p-3">{order.id}</td>

                  <td className="p-3 flex items-center gap-3">
                    <img src={order.avatar} className="w-8 h-8 rounded-full" />
                    {order.name}
                  </td>

                  <td className="p-3">{order.method}</td>

                  <td className="p-3">
                    {new Date(order.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  <td className={`p-3 ${statusColors[order.status]} font-semibold`}>
                    ● {order.status}
                  </td>

                  <td className="p-3">{order.amount}</td>

                  {/* Dropdown Menu */}
                  <td className="p-3 relative">
                    <FiMoreVertical
                      className="cursor-pointer"
                      onClick={() =>
                        setMenuIndex(menuIndex === index ? null : index)
                      }
                    />
                    {menuIndex === index && (
                      <div className="absolute right-0 bg-white border shadow-md rounded-lg py-2 w-32 z-50">
                        <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                          View details
                        </button>
                        <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                          Pending
                        </button>
                        <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                          Completed
                        </button>
                        <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-500">
                          Cancel
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center gap-2 mt-5">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}
