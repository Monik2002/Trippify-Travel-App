import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Link } from "react-router-dom";
import "./JournalCard.css";

day.extend(advancedFormat);

const JournalCard = ({ title, location, image, description, date, _id }) => {
  const fixdate = day(date).format("YYYY-MM-DD");

  return (
    <div className="diary-card">
      <div className="diary-binding"></div>
      <div className="diary-page">
        <img src={image} alt={location} className="card-img" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <div className="card-info">
            <p>
              <span className="icon">
                <FaCalendar />
              </span>
              {fixdate}
            </p>
            <p>
              <span className="icon">
                <FaLocationDot />
              </span>
              {location}
            </p>
          </div>
          <p className="card-description">
            {description.substring(0, 100)}...
            <Link className="secondary-btn" to={`/my-journals/${_id}`}>
              read more
            </Link>
          </p>
          <div className="buttons">
            <Link
              className="action-btn edit"
              to={`/my-journals/edit/${_id}`}
              style={{
                backgroundColor: "#4CAF50", // Example color for Edit button
                color: "white",
                padding: "5px 10px",
                textDecoration: "none",
              }}
            >
              Edit
            </Link>
            <Link
              className="action-btn delete"
              to={`/my-journals/delete/${_id}`}
              style={{
                backgroundColor: "#f44336", // Example color for Delete button
                color: "white",
                padding: "5px 10px",
                textDecoration: "none",
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
