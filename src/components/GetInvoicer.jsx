import React from "react";
import { useReducer, createContext, useState } from "react";
import Invoicer from "./Invoicer";
import { v4 as uuidv4 } from "uuid";

const init = () => ({
  name: "",
  adress: "",
  email: "",
  telno: "",
  website: "",
  bankname: "",
  bankacno: "",
  clientname: "",
  clientadress: "",
  invoiceno: "",
  invoicedate: "",
  duedate: "",
  item: "",
  quantity: "",
  price: "",
  notes: "",
});

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };

    case "ADRESS":
      return { ...state, adress: action.payload };

    case "EMAIL":
      return { ...state, email: action.payload };

    case "TELNO":
      return { ...state, telno: action.payload };

    case "WEBSITE":
      return { ...state, website: action.payload };

    case "BANKNAME":
      return { ...state, bankname: action.payload };

    case "BANKACNO":
      return { ...state, bankacno: action.payload };

    case "CLIENTNAME":
      return { ...state, clientname: action.payload };

    case "CLIENTADRESS":
      return { ...state, clientadress: action.payload };

    case "INVOICENO":
      return { ...state, invoiceno: action.payload };

    case "INVOICEDATE":
      return { ...state, invoicedate: action.payload };

    case "DUEDATE":
      return { ...state, duedate: action.payload };

    case "ITEM":
      return { ...state, item: action.payload };

    case "QUANTITY":
      return { ...state, quantity: action.payload };

    case "PRICE":
      return { ...state, price: action.payload };

    case "NOTES":
      return { ...state, notes: action.payload };

    default:
      return state;
  }
};

export const myContext = React.createContext();

const GetInvoicer = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState([]);

  const addItems = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      item: state.item,
      quantity: state.quantity,
      price: state.price,
    };
    setList([...list, newItems]);
  };

  return (
    <>
      {toggle ? (
        <myContext.Provider value={{ state }}>
          <Invoicer setToggle={setToggle} list={list} setList={setList} />
        </myContext.Provider>
      ) : (
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <div className="flex m-2 sm:flex-col">
            <div className="flex flex-col w-1/2 p-3 sm:w-full">
              <label htmlFor="name" className="font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "NAME", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2 p-3 sm:w-full">
              <label htmlFor="address" className="font-semibold">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "ADRESS", payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex m-2 sm:flex-col">
            <div className="flex flex-col w-1/2 p-3 sm:w-full">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2  p-3 sm:w-full">
              <label htmlFor="number" className="font-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                id="number"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "TELNO", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2  p-3 sm:w-full">
              <label htmlFor="website" className="font-semibold">
                Website
              </label>
              <input
                type="url"
                id="website"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "WEBSITE", payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex m-2 sm:flex-col">
            <div className="flex flex-col w-1/2 p-3 sm:w-full">
              <label htmlFor="bank" className="font-semibold">
                Bank Name
              </label>
              <input
                type="text"
                id="bank"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "BANKNAME", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2  p-3 sm:w-full">
              <label htmlFor="acnumber" className="font-semibold">
                Bank Account Number
              </label>
              <input
                type="text"
                id="acnumber"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "BANKACNO", payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex m-2 sm:flex-col">
            <div className="flex flex-col w-1/2 p-3 sm:w-full">
              <label htmlFor="clientname" className="font-semibold">
                Client's Name
              </label>
              <input
                type="text"
                id="clientname"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "CLIENTNAME", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2  p-3 sm:w-full">
              <label htmlFor="clientaddress" className="font-semibold">
                Client's Adress
              </label>
              <input
                type="text"
                id="clientaddress"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "CLIENTADRESS", payload: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex m-2 sm:flex-col">
            <div className="flex flex-col w-1/2 p-3 sm:w-full">
              <label htmlFor="invoice no" className="font-semibold">
                Invoice Number
              </label>
              <input
                type="text"
                id="invoice no"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "INVOICENO", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2  p-3 sm:w-full">
              <label htmlFor="invoicedate" className="font-semibold">
                Invoice Date
              </label>
              <input
                type="date"
                id="invoicedate"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "INVOICEDATE", payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-1/2  p-3 sm:w-full">
              <label htmlFor="duedate" className="font-semibold">
                Due Date
              </label>
              <input
                type="date"
                id="duedate"
                className="border border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "DUEDATE", payload: e.target.value })
                }
              />
            </div>
          </div>

          <form onSubmit={addItems}>
            <div className="flex m-2 sm:flex-col">
              <div className="flex flex-col w-1/2 p-3 sm:w-full">
                <label htmlFor="item" className="font-semibold">
                  Item
                </label>
                <input
                  type="text"
                  id="item"
                  className="border border-black rounded py-1 px-2"
                  onChange={(e) =>
                    dispatch({ type: "ITEM", payload: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-1/2  p-3 sm:w-full">
                <label htmlFor="quantity" className="font-semibold">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="border border-black rounded py-1 px-2"
                  onChange={(e) =>
                    dispatch({ type: "QUANTITY", payload: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-1/2  p-3 sm:w-full">
                <label htmlFor="price" className="font-semibold">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="border border-black rounded py-1 px-2"
                  onChange={(e) =>
                    dispatch({ type: "PRICE", payload: e.target.value })
                  }
                />
              </div>
              <input
                type="submit"
                value="Add Item"
                className="bg-green-400 hover:bg-green-600 text-white font-semibold py-2 m-3 px-2 rounded-md shadow-md cursor-pointer"
              />
            </div>
          </form>

          <div className="flex m-2 sm:flex-col">
            <div className="flex flex-col w-full p-3 sm:w-full">
              <label htmlFor="item" className="font-semibold">
                Additional Notes
              </label>
              <textarea
                name=""
                id=""
                rows="5"
                className="border w-full border-black rounded py-1 px-2"
                onChange={(e) =>
                  dispatch({ type: "NOTES", payload: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-8 rounded"
              onClick={() => setToggle((preValue) => !preValue)}
            >
              Get Invoice
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GetInvoicer;
