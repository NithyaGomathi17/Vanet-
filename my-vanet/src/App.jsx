import { useEffect, useState } from "react";
import "./styles/styles.css";

import VehicleForm from "./components/VehicleForm";
import VehicleList from "./components/VehicleList";
import Certificate from "./components/Certificate";
import RSU from "./components/RSU";
import AttackPanel from "./components/AttackPanel";
import Dashboard from "./components/Dashboard";

function App() {
  const [vehicles, setVehicles] = useState(() => {
    return JSON.parse(localStorage.getItem("vehicles")) || [];
  });

  const [certs, setCerts] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
  }, [vehicles]);

  const startSimulation = () => {
    if (vehicles.length === 0) {
      alert("Please register at least one vehicle");
      return;
    }
    setRunning(true);
  };

  const stopSimulation = () => {
    setRunning(false);
  };

  return (
    <div className="app">
      <h1>🚗 VANET Simulation System</h1>

      {/* CONTROL PANEL */}
      <div className="controlPanel">
        <button className="startBtn" onClick={startSimulation}>
          ▶ Start Simulation
        </button>

        <button className="stopBtn" onClick={stopSimulation}>
          ⛔ Stop Simulation
        </button>
      </div>

      {/* GRID */}
      <div className="grid">

        <div className="card">
          <VehicleForm vehicles={vehicles} setVehicles={setVehicles} />
        </div>

        <div className="card">
          <VehicleList vehicles={vehicles} setVehicles={setVehicles} />
        </div>

        <div className="card">
          <Certificate
            vehicles={vehicles}
            certs={certs}
            setCerts={setCerts}
          />
        </div>

        {/* ✅ FIXED RSU CARD */}
        <div className="card">
          <RSU
            certs={certs}
            running={running}
            setAlerts={setAlerts}
            setCerts={setCerts}
          />
        </div>

        <div className="card">
          <AttackPanel
            certs={certs}
            setCerts={setCerts}
            alerts={alerts}
            setAlerts={setAlerts}
            running={running}
          />
        </div>

        <div className="card">
          <Dashboard
            vehicles={vehicles}
            certs={certs}
            alerts={alerts}
          />
        </div>

      </div>
    </div>
  );
}

export default App;