import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className={styles.page}>
        <div>
          <NavLink to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/About">
            Recommend
          </NavLink>
        </div>
        <div>
          <NavLink to="/Contact">
            Search
          </NavLink>
        </div>
        <div>
          <NavLink to="/slug">
            MyPage
          </NavLink>
        </div>       
        <h1>황정우 202030435 C:\Users\user\Desktop\react1-2\midterm</h1>
      </div>
    );
  }