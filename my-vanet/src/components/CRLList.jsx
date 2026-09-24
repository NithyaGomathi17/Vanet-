import React from "react";

export default function CRLList({ revoked }) {
  return (
    <div className="card">
      <h2>🔐 Certificate Revocation List (CRL)</h2>

      {revoked.map((c, i) => (
        <div key={i} className="revoked">
          ❌ {c.certId} | {c.vehicleId} | REVOKED
        </div>
      ))}
    </div>
  );
}