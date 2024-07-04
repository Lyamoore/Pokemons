import { NavLink } from "react-router-dom";

import styles from "../../Styles/Modules/_navbar.module.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav
        className={`${styles.nav} container fixed-top navbar-expand-lg bg-body-tertiary`}
      >
        <div className={`${styles.nav__container}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.nav__link} ${styles.nav__link_brand} ${styles.nav__link_active}`
                : ` ${styles.nav__link} ${styles.nav__link_brand}`
            }
          >
            Pokémons!
          </NavLink>
          <div className="">
            <ul className={styles.nav__links}>
              <li className="">
                <NavLink
                  to="/pokemons"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav__link} ${styles.nav__link_active}`
                      : `${styles.nav__link}`
                  }
                  aria-current="page"
                >
                  World
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/inventory"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav__link} ${styles.nav__link_active}`
                      : `${styles.nav__link}`
                  }
                  aria-current="page"
                >
                  Inventory
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
