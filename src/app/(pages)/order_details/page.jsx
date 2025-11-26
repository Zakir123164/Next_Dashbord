"use client";

import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser, FaTruck, FaMapMarkerAlt } from "react-icons/fa";

export default function OrderDetails() {
  const [status, setStatus] = useState("Pending");
  const [statusMenu, setStatusMenu] = useState(false);

  const products = [
    { name: "Bose noise cancelling", price: 948.55, qty: 2, icon: "🎧" },
    { name: "Philips wireless head phone", price: 767.50, qty: 3, icon: "🎧" },
    { name: "Curmit smart watch", price: 396.84, qty: 1, icon: "⌚" },
    { name: "Google Pixel Buds", price: 178.35, qty: 4, icon: "🎮" },
  ];

  const subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
  const tax = subtotal * 0.1;
  const discount = 20;
  const total = subtotal + tax - discount;

  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* ------------------------- SIDEBAR ------------------------- */}
      <aside className="w-64 bg-white border-r p-5 hidden lg:block">
        <h2 className="text-xl font-semibold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-600">
          <a className="hover:text-black">Dashboard</a>
          <a className="hover:text-black">Products</a>
          <a className="text-black font-semibold">Orders</a>
          <a className="hover:text-black">Payments</a>
          <a className="hover:text-black">Transactions</a>
          <a className="hover:text-black">Clients</a>
        </nav>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops</li>
            <li>Mobile phones</li>
            <li>Desktops</li>
            <li>Accessories</li>
            <li>Portable storage</li>
            <li>Networking</li>
          </ul>
        </div>
      </aside>

      {/* ------------------------- MAIN CONTENT ------------------------- */}
      <main className="flex-1 p-8">

        {/* Title */}
        <h1 className="text-2xl font-semibold">Order Details</h1>

        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mt-2 mb-6">
          <span className="hover:text-purple-600 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="hover:text-purple-600 cursor-pointer">Dashboard</span>
        </div>

        {/* ------------------------- TOP BAR ------------------------- */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Order ID: #85643</h2>
            <p className="text-sm text-gray-500">Mon, Jan 28, 2022, 08:40AM</p>
            <span className="text-yellow-500 font-semibold">{status}</span>
          </div>

          {/* Status dropdown */}
          <div className="relative">
            <button
              onClick={() => setStatusMenu(!statusMenu)}
              className="flex items-center px-4 py-2 bg-white border rounded-lg shadow-sm"
            >
              Change Status <MdKeyboardArrowDown className="ml-2" />
            </button>

            {statusMenu && (
              <div className="absolute bg-white border shadow-md rounded-lg w-40 mt-2">
                {["Pending", "Delivered", "Canceled"].map(s => (
                  <button
                    key={s}
                    onClick={() => {
                      setStatus(s);
                      setStatusMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
            Save
          </button>
        </div>

        {/* ------------------------- INFO BOXES ------------------------- */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">

          {/* Customer */}
          <div className="bg-white border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-purple-600" />
              <h3 className="font-semibold">Customer</h3>
            </div>
            <p><strong>Full name:</strong> Jane Cooper</p>
            <p><strong>Email:</strong> janecooper@email.com</p>
            <p><strong>Phone:</strong> +906 356 221</p>
            <button className="mt-3 text-blue-600">View Profile</button>
          </div>

          {/* Order info */}
          <div className="bg-white border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <FaTruck className="text-purple-600" />
              <h3 className="font-semibold">Order Info</h3>
            </div>
            <p><strong>Shipping:</strong> Next express</p>
            <p><strong>Pay method:</strong> PayPal</p>
            <p><strong>Status:</strong> {status}</p>
            <button className="mt-3 text-blue-600">Download Info</button>
          </div>

          {/* Delivery */}
          <div className="bg-white border rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-purple-600" />
              <h3 className="font-semibold">Deliver to</h3>
            </div>
            <p>Address: Santa Ana, Illinois 85486</p>
            <p>2237 Westheimer Rd. Block 04</p>
            <button className="mt-3 text-blue-600">View Profile</button>
          </div>

          {/* Payment */}
          <div className="bg-white border rounded-xl p-4">
            <h3 className="font-semibold mb-2">Payment Info</h3>
            <p><strong>Method:</strong> Master Card ****6657</p>
            <p><strong>Business name:</strong> Market LLC</p>
            <p><strong>Phone:</strong> +906 876 52</p>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl border p-4 mt-4">
          <h3 className="font-semibold mb-2">Notes</h3>
          <textarea
            placeholder="Type note here"
            className="w-full border rounded-lg p-3 h-24"
          ></textarea>
        </div>

        {/* ------------------------- PRODUCT TABLE ------------------------- */}
        <h2 className="mt-6 text-lg font-semibold">Products</h2>

        <div className="bg-white border rounded-xl mt-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3"><input type="checkbox" /></th>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Qty</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-3"><input type="checkbox" /></td>
                  <td className="p-3 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    {item.name}
                  </td>
                  <td className="p-3">${item.price.toFixed(2)}</td>
                  <td className="p-3">{item.qty}</td>
                  <td className="p-3">${(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ------------------------- SUMMARY ------------------------- */}
        <div className="flex justify-end mt-6">
          <div className="bg-white border rounded-xl p-6 w-72">
            <p className="flex justify-between"><span>Subtotal:</span> <strong>${subtotal.toFixed(2)}</strong></p>
            <p className="flex justify-between"><span>Tax (10%):</span> <strong>${tax.toFixed(2)}</strong></p>
            <p className="flex justify-between"><span>Discount:</span> <strong>-${discount.toFixed(2)}</strong></p>
            <hr className="my-3" />
            <p className="flex justify-between text-lg"><span>Total:</span> <strong>${total.toFixed(2)}</strong></p>

            <div className="mt-2">
              <span className="text-sm text-gray-500">Status:</span>
              <p className="font-semibold text-yellow-500">{status}</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
