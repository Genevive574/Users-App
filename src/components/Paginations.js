import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

function Pagination({
  currentPage,
  dataPerPage,
  totalData,
  paginates,
  prevPage,
  nextPage,
  isPending
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {!isPending && (
          <Link onClick={() => prevPage()} to="#" className="prev">
            Prev
          </Link>
        )}

        {pageNumber.map((number) => (
          <li className="page-list" key={number}>
            <Link
              onClick={() => {
                paginates(number);
              }}
              to="#"
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
        <div className="pager">
          <p>Page {currentPage}</p>
        </div>
        {!isPending && (
          <Link onClick={() => nextPage()} to="#" className="prev">
            Next
          </Link>
        )}
      </ul>
    </div>
  );
}
export default Pagination;
