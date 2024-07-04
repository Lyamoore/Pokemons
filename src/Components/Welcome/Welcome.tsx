import styles from "../../Styles/Modules/_welcome.module.scss";

export const Welcome: React.FC = () => {
  return (
    <section className={`${styles.container} container`}>
      <h1>Welcome to Pokémon World, traveler.</h1>
      <h3 className="h4">
        Here you can try your luck at catching various creatures. If you are
        ready to start your journey, go to the "World" tab, the Pokémon you
        catch will appear in the "Inventory" tab.
      </h3>
    </section>
  );
};
