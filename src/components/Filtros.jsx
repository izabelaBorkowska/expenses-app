import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor ">
      <form>
        <div className="campo">
          <label>Expenses by Category </label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">All Categories </option>
            <option value="savings"> Savings </option>
            <option value="food"> Food </option>
            <option value="home"> Home </option>
            <option value="various"> Various </option>
            <option value="leisure"> Leisure </option>
            <option value="health"> Health </option>
            <option value="subscriptions"> Subscriptions </option>
            <option value="hotels"> Hotels </option>
            <option value="flights"> Flights </option>
            <option value="pets"> Pets </option>
            <option value="transport"> Transport </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
