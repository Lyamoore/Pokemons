import { HomePage } from "@/Screens/Home";
import { InventoryPage } from "@/Screens/Inventory";
import { NotFoundPage } from "@/Screens/NotFound";
import { PokemonPage } from "@/Screens/Pokemon";
import { WorldPage } from "@/Screens/World";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemons" element={<WorldPage />} />
      <Route path="/pokemons/:id" element={<PokemonPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
