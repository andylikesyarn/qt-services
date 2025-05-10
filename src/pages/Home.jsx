// pages/Home.jsx
export default function Home() {
  return (
    <div className="container">
      <div className="introductory-div">
        <ul
          className="h1 fixed-top"
          style={{
            paddingTop: "7rem",
            display: "grid",
            listStyle: "none",
          }}
        >
          <li>
            <img
              src="public/assets/images/initials_tricolor_notext.svg"
              alt="logo"
              style={{ height: "40rem" }}
            ></img>
          </li>
          <li>
            quality transit services <br></br>for queer & trans siblings
          </li>
        </ul>
      </div>
    </div>
  );
}
