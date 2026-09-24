import { useState } from "react";

export default function Certificate({ vehicles, certs, setCerts }) {
  const issueCert = (v) => {
    const tempId = "TMP-" + Math.random().toString(36).slice(2, 8);

    const cert = {
      certId: "CERT-" + Math.random().toString(36).slice(2, 8),
      tempId: tempId,        // ✅ ONLY TEMP ID
      owner: v.owner,
      expires: new Date(Date.now() + 60000).toLocaleTimeString(),
    };

    setCerts([...certs, cert]);
  };

  const revoke = (id) => {
    setCerts(certs.filter((c) => c.certId !== id));
  };

  return (
    <div className="card">
      <h3>🔐 Certificate Authority</h3>

      {vehicles.map((v) => (
        <div key={v.id} className="row">
          👤 {v.owner}
          <button onClick={() => issueCert(v)}>Issue Cert</button>
        </div>
      ))}

      <hr />

      {certs.map((c) => (
        <div key={c.certId} className="certBox">
          🔐 CERT: {c.certId} <br />
          🆔 TEMP ID: {c.tempId} <br />
          👤 OWNER: {c.owner} <br />
          ⏱ EXPIRES: {c.expires} <br />

          <button className="revoke" onClick={() => revoke(c.certId)}>
            Revoke
          </button>
        </div>
      ))}
    </div>
  );
}