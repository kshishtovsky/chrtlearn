import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    }
  }

  handleCLick = (id) => {
    this.setState({activeId: id})
  }

  render() {
    return (
      <nav class="relative flex flex-row justify-center">
        <div class="fixed mt-4 rounded-xl bg-gray-100 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div className="hidden sm:flex">
              <div className="flex w-full space-x-4">
                <Link to="/" onClick={this.handleCLick.bind(this, 1)}>
                  <p className={"px-3 py-2 rounded-md text-sm font-medium " + (this.state.activeId === 1 ? "bg-gray-900 text-white" : "text-gray-500")}>
                    Главная
                  </p>
                </Link>
                <Link to="/learn" onClick={this.handleCLick.bind(this, 1)}>
                  <p className={"px-3 py-2 rounded-md text-sm font-medium " + (this.state.activeId === 2 ? "bg-gray-900 text-white" : "text-gray-500")}>
                    Рабочий стол
                  </p>
                </Link>
                <Link to="/timetable" onClick={this.handleCLick.bind(this, 1)}>
                  <p className={"px-3 py-2 rounded-md text-sm font-medium " + (this.state.activeId === 3 ? "bg-gray-900 text-white" : "text-gray-500")}>
                    Расписание
                  </p>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:text-black"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
