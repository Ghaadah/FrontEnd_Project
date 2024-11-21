import React from "react";

function Home() {
  return (
    <div>
      <div className="  m-5 text-center">
        <h2> CS-564 Front End Web Tech Fall 2024 </h2>
        <h4>Final Project - eduExp App</h4>
        <div
          className="text-start
        "
        >
          <h3> Student budget assistant application</h3>
          <ul>
            <li>
              This project will develop a website to help international students
              budget for their time at college.
            </li>
            <li>
              Users can select preferred school, and home currency, allowing the
              site to convert estimated costs into their local currency.
            </li>
            <li>
              It will provide a detailed breakdown of expenses such as tuition,
              rent, and food, enhanced by data visualization tools.
            </li>
            <li>
              The goal is to empower students to make informed financial
              decisions while studying abroad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
