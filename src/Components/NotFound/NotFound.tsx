import { Link } from "react-router-dom";

import styles from "../../Styles/Modules/_notFound.module.scss";

export const NotFound: React.FC = () => {
  return (
    <section className={`${styles.container} container`}>
      <h2>
        404 | This page was eaten by the pokémon Snorlax. Try your luck
        elsewhere.
      </h2>
      <Link to="/pokemons">
        <button type="button" className="btn btn-primary btn-lg">
          Find Snorlax and take revenge on him
        </button>
      </Link>
    </section>
  );
};
