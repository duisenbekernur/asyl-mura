import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logoImg from "../img/favicon/favicon270x270.png";
import menu from "../img/favicon/menu.png";

const links = ["main", "memorials", "grands", "about"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>

        <ul className="nav__list">
          {[
            "Басты бет",
            "Мемориалды кешендер",
            "Гранттар",
            "Жоба туралы",
          ].map((elem, index) => (
            <Link
              className={active === index ? "activ" : ""}
              key={elem}
              onClick={() => setActive(index)}
              to={links[index]}
            >
              <li>{elem}</li>
            </Link>
          ))}
        </ul>

        <div className="nav__mob-menu">
          <img
            color="#fff"
            src={menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            style={{ width: "35px", cursor: "pointer", zIndex: "100" }}
          />
          {toggle && (
            <motion.div
              whileInView={{ x: [150, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <ul className="app__navbar-links">
                {[
                  "Басты бет",
                  "Мемориалды кешендер",
                  "Гранттар",
                  "Жоба туралы",
                ].map((elem, index) => (
                  <Link
                    onClick={() => setToggle(false)}
                    className={active === index ? "activ" : ""}
                    key={elem}
                    to={links[index]}
                  >
                    <li>{elem}</li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
