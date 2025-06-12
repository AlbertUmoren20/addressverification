import React from 'react';
import './App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const TskDash = () => {
  const tasks = {
    qms: [
      { id: 1, name: "Document Control System Update", coordinator: "John Doe", status: "In Progress", frequency: "Weekly" },
      { id: 2, name: "Internal Audit Preparation", coordinator: "Jane Smith", status: "Completed", frequency: "Monthly" }
    ],
    sms: [
      { id: 1, name: "Safety Policy Review", coordinator: "Alice Johnson", status: "Not Started", frequency: "Daily" }
    ],
    isms: [
      { id: 1, name: "Risk Assessment Update", coordinator: "Bob Brown", status: "In Progress", frequency: "Weekly" }
    ],
    bcms: [
      { id: 1, name: "Business Continuity Plan Test", coordinator: "Charlie Davis", status: "Completed", frequency: "Monthly" }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Started":
        return "status-not-started";
      case "In Progress":
        return "status-in-progress";
      case "Completed":
        return "status-completed";
      default:
        return "";
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">ISO 20031 Task Dashboard</h1>
      
      <div className="task-sections">
        {Object.entries(tasks).map(([category, taskList]) => (
          <div key={category} className="task-section">
            <h2 className="section-title">{category.toUpperCase()} Tasks</h2>
            <div className="task-list">
              {taskList.map(task => (
                <div key={task.id} className="task-item">
                  <div className="task-info">
                    <h3 className="task-name">{task.name}</h3>
                    <p className="task-coordinator">Coordinator: {task.coordinator}</p>
                  </div>
                  <div className="task-meta">
                    <span className={`task-status ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                    <span className="task-frequency">{task.frequency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TskDash;