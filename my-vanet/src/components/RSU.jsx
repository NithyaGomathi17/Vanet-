import { useEffect, useState } from "react";

export default function RSU({ certs = [], running }) {
  const [pos, setPos] = useState({});

  useEffect(() => {
    if (!running) return;

    const i = setInterval(() => {
      const p = {};
      certs.forEach(c => {
        p[c.certId] = {
          x: Math.random()*80,
          y: Math.random()*60
        };
      });
      setPos(p);
    }, 1500);

    return () => clearInterval(i);
  }, [certs, running]);

  return (
    <>
      <h3>📡 RSU</h3>
      <p>Vehicles: {certs.length}</p>

      <div className="mapBox">
        <div className="rsuCenter">RSU</div>
        <div className="circle"></div>

        {certs.map(c => (
          <div key={c.certId}
            className="car"
            style={{
              left: pos[c.certId]?.x + "%",
              top: pos[c.certId]?.y + "%"
            }}>
            🚗
          </div>
        ))}
      </div>
    </>
  );
}