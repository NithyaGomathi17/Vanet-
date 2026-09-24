export default function VehicleList({ vehicles, setVehicles }) {
  return (
    <>
      <h3>🚗 Vehicles</h3>

      {vehicles.length === 0 && <p>No vehicles registered</p>}

      {vehicles.map((v) => (
        <div key={v.id} className="row">

          <div>
            <strong>{v.id}</strong> <br />
            👤 {v.owner} <br />
            🚘 {v.name}
          </div>

          <button
            className="deleteBtn"
            onClick={() =>
              setVehicles(vehicles.filter((x) => x.id !== v.id))
            }
          >
            ❌
          </button>

        </div>
      ))}
    </>
  );
}