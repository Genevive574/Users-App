import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Paginations from "./Paginations";

export const User = () => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch("https://randomuser.me/api/?results=100");
      const jsonData = await response.json();

      setIsPending(false);
      setUsers(jsonData.results);
      console.log(jsonData.results);
    };
    fetchData();
  }, []);

  // Get current Data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = users.slice(indexOfFirstData, indexOfLastData);

  // switch page
  const paginate = (number) => {
    setCurrentPage(number);
  };

  // previous page
  const prevPage = () => {
    if (currentPage <= 1) {
      return currentPage;
    }
    setCurrentPage((currentPage) => currentPage - 1);
  };

  // next page
  const nextPage = () => {
    const pagelength = users.length / dataPerPage;
    if (currentPage < pagelength) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <div>
      {isPending && <div className="load">Loading...</div>}
      <div className="cardcontainer">
        {currentData.map((user, index) => (
          <div key={index}>
            <div className="card">
              <div className="card_image">
                <img src={user.picture.medium} alt="" />
              </div>
              <div className="card_copy">
                <h1>
                  {user.name.first} {user.name.last}
                </h1>
                <h2>{user.gender}</h2>
                <h3>{user.email}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Paginations
        currentPage={currentPage}
        dataPerPage={dataPerPage}
        totalData={users.length}
        paginates={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        isPending={isPending}
      />

      <Routes>
        <Route
          path="participants"
          element={<p>Welcome to the participants</p>}
        />
      </Routes>
    </div>
  );
};
