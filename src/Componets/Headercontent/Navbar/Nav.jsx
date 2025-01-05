import React from "react";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 3,
    title: "User  Info",
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Coverage",
    link: "/coverage",
  },
  {
    id: 5,
    title: "AboutUs",
    link: "/about",
  },
  {
    id: 6,
    title: "Trends",
    link: "/trends",
  },
];

const Nav = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4 md:pt-4">
        <div className="text-2xl flex items-center gap-1 font-bold">
          <p className="text-secondary whitespace-pre-wrap">
            RFIDPAY BrakeLimitsStayWithit
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-3 text-gray-950">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text-xl">
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_o_-1px_#23034b] font-semibold
                        relative text-black before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <a href={"/signup"}>
              <button
                type="button"
                class="px-3 py-2.5 text-sm font-medium text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:outline-none rounded-lg text-center"
              >
                Register
              </button>
            </a>
            <a href={"/login"}>
              <button
                type="button"
                class="px-4 py-2.5 text-sm font-medium text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:outline-none rounded-lg text-center"
              >
                Login
              </button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
