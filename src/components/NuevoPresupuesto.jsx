import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("Set a valid number");
      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupesto contenedor sombra ">
      <form onSubmit={handlePresupuesto} className="formulario ">
        <div className="campo">
          <label> Set Your Budget </label>

          <input
            className="nuevo-presupesto"
            type="number"
            placeholder="Add Your Budget"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Add" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
