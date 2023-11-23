import React, { useContext, useRef } from "react";
import { myContext } from "./GetInvoicer";
import { MdDelete } from "react-icons/md";
import ReactToPrint from "react-to-print";

const Invoicer = ({ setToggle, list, setList }) => {
  const { state } = useContext(myContext);

  const componentRef = useRef();

  const deleteItem = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <div className="flex justify-end mt-3">
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Print/Download
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div className="m-3" ref={componentRef}>
        <h1 className="text-4xl font-bold text-center">Invoicer</h1>

        <div className="mt-10 flex flex-col items-end">
          <h1 className="text-2xl font-bold">{state.name}</h1>
          <p className="font-semibold">{state.adress}</p>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold">{state.clientname}</h1>
          <p className="font-semibold">{state.clientadress}</p>
        </div>

        <div className="flex flex-col items-end mt-7">
          <div>
            <span className="font-semibold">Invoice Number: </span>
            {state.invoiceno}
          </div>
          <div className="bg-slate-200">
            <span className="font-semibold ">Invoice Date: </span>
            {state.invoicedate}
          </div>
          <div>
            <span className="font-semibold">Due Date: </span>
            {state.duedate}
          </div>
        </div>

        <div className="my-10 ">
          <table className="flex flex-col table-auto justify-center border-collapse items-center">
            <thead className="flex w-4/5 bg-slate-100">
              <tr className="flex justify-evenly w-full">
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="flex flex-col w-4/5 justify-around items-center">
              {list.map((item, index) => {
                const total = item.quantity * item.price;
                return (
                  <>
                    <tr key={index} className="flex justify-evenly w-full">
                      <td>{item.item}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{total}</td>
                      <td>
                        <button onClick={() => deleteItem(item.id)}>
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Remarks</h1>
          <p className="">{state.notes}</p>
        </div>

        <hr className="h-0.5 bg-slate-600 my-5" />

        <div className="flex flex-wrap  ">
          <div className="font-semibold ">Name: </div>
          {state.name}
          <div className="font-semibold ml-5">Email: </div>
          {state.email}

          <div className="font-semibold ml-5">Your Phone:</div>
          {state.telno}

          <div className="font-semibold ml-5">Account Name: </div>
          {state.bankname}

          <div className="font-semibold ml-5">Account Nunber: </div>
          {state.bankacno}

          <div className="font-semibold ml-5">Account Holder: </div>
          {state.name}

          <div className="font-semibold ml-5">Website: </div>
          {state.website}
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <button
          onClick={() => setToggle((preValue) => !preValue)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Get New Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoicer;
