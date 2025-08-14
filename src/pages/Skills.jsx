import React from "react";

export default function Skills() {
  return (
    <div className="page-wrapper">
      <h1 className="section-title">Skills</h1>

      {/* ===== ServiceNow Platform ===== */}
      <div className="card">
        <h2>ServiceNow Platform</h2>
        <ul className="list">
          <li>User Management, Groups, and Roles</li>
          <li>Lists, Filters, Tables, and Fields</li>
          <li>Form Configuration and Import Sets</li>
          <li>Update Sets Management</li>
          <li>UI Policies, UI Actions, and Data Policies</li>
          <li>Hands-on experience with ServiceNow PDI</li>
        </ul>
      </div>

      {/* ===== Microsoft 365 Administration ===== */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Microsoft 365 Administration</h2>
        <ul className="list">
          <li>Exchange Online</li>
          <li>SharePoint Online</li>
          <li>Microsoft Teams</li>
          <li>Multi-Factor Authentication (MFA)</li>
          <li>OneDrive for Business</li>
          <li>Active Directory Management</li>
        </ul>
      </div>

      {/* ===== DevOps Tools ===== */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>DevOps Tools</h2>
        <ul className="list">
          <li>Jenkins (CI/CD Pipelines)</li>
          <li>Zabbix Monitoring</li>
          <li>Kibana</li>
          <li>Ubuntu Administration</li>
        </ul>
      </div>

      {/* ===== Cloud Platforms ===== */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Cloud Platforms</h2>
        <ul className="list">
          <li>AWS EC2</li>
          <li>AWS S3</li>
          <li>AWS VPC</li>
          <li>AWS IAM</li>
        </ul>
      </div>

      {/* ===== Version Control & IT Operations ===== */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Version Control & IT Operations</h2>
        <ul className="list">
          <li>Git, GitHub, and Bitbucket</li>
          <li>Jira Project Management</li>
          <li>ServiceNow ITSM Processes</li>
          <li>Zoho Desk Ticketing</li>
        </ul>
      </div>
    </div>
  );
}
