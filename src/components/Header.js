import React from "react";

function Header() {
  return (
    <section>
      <h2>Welcome to the portfolio of Keti</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
    </section>
  );
}

export default Header;