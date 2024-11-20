// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import JournalCard from '../components/JournalCard';

// const AllJournals = () => {
//   const [journals, setJournals] = useState([]);

//   useEffect(() => {
//     const fetchJournals = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/v1/journal/all-journals", {
//           withCredentials: true,
//         });
//         setJournals(response.data.journals);
//       } catch (error) {
//         console.error("Error fetching journals:", error);
//       }
//     };

//     fetchJournals();
//   }, []);

//   return (
//     <div>
//       <h1>All Journals</h1>
//       <div className="journals-container">
//         {journals.map((journal) => (
//           <JournalCard
//             key={journal._id}
//             title={journal.title}
//             location={journal.location}
//             date={journal.date}
//             description={journal.description}
//             image={journal.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllJournals;

import { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Link } from "react-router-dom";
import "./allJournals.css";

day.extend(advancedFormat);

const AllJournals = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      setJournals([]);
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/journal/all-journals",
          {
            withCredentials: true,
          }
        );
        setJournals(response.data.journals);
      } catch (error) {
        console.error("Error fetching journals:", error);
      }
    };

    fetchJournals();
  }, []);

  return (
    <div className="all-journals">
      <h1>All Journals</h1>
      <div className="journals-container">
        {journals.map((journal) => {
          const formattedDate = day(journal.date).format("YYYY-MM-DD");
          return (
            <div key={journal._id} className="journal-card">
              <div className="card-content">
                <img
                  src={journal.image}
                  alt={journal.location}
                  className="card-img"
                />
                <h3 className="card-title">{journal.title}</h3>
                <div className="card-info">
                  <p>
                    <span className="icon">
                      <FaCalendar />
                    </span>
                    {formattedDate}
                  </p>
                  <p>
                    <span className="icon">
                      <FaLocationDot />
                    </span>
                    {journal.location}
                  </p>
                </div>
                <p className="card-description">
                  {journal.description.substring(0, 100)}...
                  <Link
                    className="secondary-btn"
                    to={`/my-journals/${journal._id}`}
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllJournals;
