import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const [updated_at, setUpdatedAt] = useState("0 mints");

  const handleUpdatetime = useCallback(
    (e) => {
      const date = new Date(value.pushed_at);
      const nowdate = new Date();
      const diff = nowdate.getTime() - date.getTime();
      const hours = Math.trunc(diff / 1000 / 60 / 60);

      if (hours < 24) {
        return setUpdatedAt(`${hours.toString()} hours ago`);
      } else {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return setUpdatedAt(`on ${day} ${monthNames[monthIndex]} ${year}`);
      }
    },
    [value.pushed_at]
  );

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  const { repo, description, stars, language, forks } = value;
  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{repo} </h5>
          <p className="card-text">{description} </p>
          <a
            href={`${"http://github.com/nealdotpy/" + repo}/archive/master.zip`}
            className="btn btn-outline-secondary mr-3"
          >
            <i className="fab fa-github" /> Clone Project
          </a>
          <a
            href={"http://github.com/nealdotpy/" + repo}
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i className="fab fa-github" /> Repo
          </a>
          <hr />
          Primarily written in {language}.
          <p></p>
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              <i className="fab fa-github" /> Stars{" "}
              <span className="badge badge-dark">{stars}</span>
            </span>
            <span className="text-dark card-link mr-4">
              <i className="fab fa-github" /> Forks{" "}
              <span className="badge badge-dark">{forks}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Language = ({ value }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(
    (e) => {
      axios
        .get(value)
        .then((response) => {
          // handle success
          // console.log(response.data);
          return setData(response.data);
        })
        .catch((error) => {
          // handle error
          return console.error(error.message);
        })
        .finally(() => {
          // always executed
        });
    },
    [value]
  );

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
    // console.log(index, this.state.data[index]);
  }
  // console.log("array contains ", array, this.state.data[array[0]]);

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.map((language) => (
        <p key={language} className="badge badge-light card-link">
          {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
        </p>
      ))}
    </div>
  );
};

export default ProjectCard;
