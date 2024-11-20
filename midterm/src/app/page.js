import { NavLink } from "react-router-dom";
import styles from "./page.module.css";
export default function Home() {

  // <Route path = "/" component = {Home}> </Route>


  return (
    // app router 라이브러리 설치하여 편하게 작업하려다가 오류를 잡지 못하고 제출한상태 입니다.
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
