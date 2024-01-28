import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import IconoPets from "../img/icono-pets.png";
import IconoFlights from "../img/icono-flight.png";
import IconoTransport from "../img/icono-transport.png";
import IconoHotel from "../img/icono-hotel.png";

const diccionarioIconos = {
  savings: IconoAhorro,
  food: IconoComida,
  home: IconoCasa,
  various: IconoGastos,
  leisure: IconoOcio,
  health: IconoSalud,
  subscriptions: IconoSuscripciones,
  hotels: IconoHotel,
  flights: IconoFlights,
  pets: IconoPets,
  transport: IconoTransport,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="Expense Icon" />

            <div className="descripcion-gasto">
              <p className="categoria"> {categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                {" "}
                Added on: {""}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="'cantidad-gasto"> €{cantidad} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
