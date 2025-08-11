import React from 'react';
import { FaStar, FaClipboardList, FaPlus, FaUser } from 'react-icons/fa';

const EmployeeCard = ({ image, name, role, description, tasks, rating, projects }) => {
  return (
    <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '10px' }}>
      <div className="card-body d-flex">
        {/* Avatar */}
        <img
          src={image}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        />

        {/* Info */}
        <div className="flex-grow-1">
          <h5 className="mb-1">{name}</h5>
          <span className="badge bg-light text-primary border border-primary mb-2">{role}</span>
          <p className="small text-muted mb-2">{description}</p>

          {/* Stats */}
          <div className="d-flex align-items-center mb-3">
            <FaClipboardList className="text-danger me-1" /> <span className="me-3">{tasks}</span>
            <FaStar className="text-warning me-1" /> <span className="me-3">{rating}</span>
            <FaClipboardList className="text-danger me-1" /> <span>{projects}</span>
          </div>

          {/* Buttons */}
          <div>
            <button className="btn btn-primary btn-sm me-2">
              <FaPlus className="me-1" /> Add Task
            </button>
            <button className="btn btn-dark btn-sm">
              <FaUser className="me-1" /> Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
