import { IPokemonCard } from "@/Models/Cards";
import { capitalizeFirstLetter } from "@/Services/Capitalize";
import { useNavigate } from "react-router-dom";

import styles from "../../Styles/Modules/_pokemonCardMain.module.scss";

export const PokemonCardMain = ({
  id,
  name,
  sprites,
  abilities,
  isCaught,
  date,
}: IPokemonCard) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const { front_default: img } = sprites;
  const pokemonName = capitalizeFirstLetter(name);

  return (
    <section className={`${styles.container} container`}>
      <div className={`${styles.card} card`}>
        <button
          type="button"
          className={`${styles.card__btn} btn btn-primary`}
          onClick={handleClick}
        >
          Back
        </button>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={img}
              className={`${styles.card__img} img-fluid rounded-start`}
              alt={pokemonName}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">{pokemonName}</h3>
              <p className={`${styles.card__id} card-text`}>Id: {id}</p>
              {abilities && abilities.length > 0 && (
                <p className="card-text">
                  <span>Abilities:</span>
                  <ul className={styles.card__ul}>
                    {abilities.map((ability) => (
                      <li key={ability.ability.name}>
                        {capitalizeFirstLetter(ability.ability.name)}
                      </li>
                    ))}
                  </ul>
                </p>
              )}
              <p className="card-text">
                <small className="text-body-secondary">
                  Status: {isCaught ? "caught" : "uncaught"}
                </small>
              </p>

              {isCaught && (
                <p className="card-text">
                  <small className="text-body-secondary">Date: {date}</small>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
