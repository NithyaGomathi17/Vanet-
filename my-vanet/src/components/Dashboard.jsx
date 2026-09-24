export default function Dashboard({ vehicles, certs, alerts }) {
  return (
    <>
      <h3>📊 Dashboard</h3>

      <p>🚗 Vehicles: {vehicles.length}</p>
      <p>🔐 Certificates: {certs.length}</p>
      <p>⚠ Alerts: {alerts.length}</p>
    </>
  );
}