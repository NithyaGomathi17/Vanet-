import { useEffect } from "react";

export default function AttackPanel({
  certs,
  setCerts,
  alerts,
  setAlerts,
  running
}) {

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      if (certs.length === 0) return;

      const cert = certs[Math.floor(Math.random() * certs.length)];

      if (Math.random() < 0.4) {
        const msg = {
          id: Date.now(),
          text: `⚠ Attack from TEMP ${cert.tempId}`,
          cert,
          time: new Date().toLocaleTimeString()
        };

        setAlerts(prev => [...prev, msg]);

        // 🔐 revoke cert automatically
        setCerts(prev =>
          prev.filter(c => c.certId !== cert.certId)
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [running, certs]);

  // ❌ DELETE SINGLE ALERT
  const deleteAlert = (id) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  // 🧹 CLEAR ALL ALERTS
  const clearAll = () => {
    setAlerts([]);
  };

  return (
    <div>
      <h3>⚠ Attack Monitor</h3>

      {/* CLEAR BUTTON */}
      {alerts.length > 0 && (
        <button className="clearBtn" onClick={clearAll}>
          🧹 Clear All Attacks
        </button>
      )}

      {alerts.length === 0 && <p>No attacks detected</p>}

      {alerts.map(a => (
        <div key={a.id} className="alert">

          <div>
            🚨 {a.text} <br />
            🔐 Cert: {a.cert.certId} <br />
            ⏱ {a.time}
          </div>

          <button
            className="deleteBtn"
            onClick={() => deleteAlert(a.id)}
          >
            ❌
          </button>

        </div>
      ))}
    </div>
  );
}