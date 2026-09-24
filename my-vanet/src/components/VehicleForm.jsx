import { useState } from "react";

export default function VehicleForm({ vehicles, setVehicles }) {
  const [form, setForm] = useState({
    vehicleId: "",
    owner: "",
    name: "",
  });

  const addVehicle = () => {
    if (!form.vehicleId || !form.owner || !form.name) {
      alert("Fill all fields");
      return;
    }

    setVehicles([
      ...vehicles,
      {
        id: form.vehicleId,
        owner: form.owner,
        name: form.name,
      },
    ]);

    setForm({ vehicleId: "", owner: "", name: "" });
  };

  return (
    <div className="formBox">
      <h3>🚗 Register Vehicle</h3>

      <div className="inputGroup">
        <label>Vehicle ID</label>
        <input
          value={form.vehicleId}
          onChange={(e) =>
            setForm({ ...form, vehicleId: e.target.value })
          }
        />
      </div>

      <div className="inputGroup">
        <label>Owner Name</label>
        <input
          value={form.owner}
          onChange={(e) =>
            setForm({ ...form, owner: e.target.value })
          }
        />
      </div>

      <div className="inputGroup">
        <label>Vehicle Name</label>
        <input
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
      </div>

      <button className="primaryBtn" onClick={addVehicle}>
        Register Vehicle
      </button>
    </div>
  );
}