import React, { Component } from 'react';
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__profileName">
              <h1>Andrey Yatsenko</h1>
              <h2>front-end developer</h2>
            </div>
            <div className="header__logo" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="main__inner">
            <div className="main__info">
              <div className="main__avatar" />
              <div className="main__contact">
                <h3>contact</h3>
                <p>Name</p>
                <p>Andrey Yatsenko</p>
                <p>Location</p>
                <p>Grodno</p>
                <p>phone</p>
                <p>+37 525-993-317</p>
                <p>e-mail</p>
                <p>andrey.ytsnk@gmail.com</p>
              </div>
              <div className="main__socialMedia">
                <h3>social media</h3>
                <p>andrey.ytsnk@gmail.com</p>
                <p>andrey.ytsnk@gmail.com</p>
                <p>andrey.ytsnk@gmail.com</p>
                <p>andrey.ytsnk@gmail.com</p>
              </div>
              <div className="main__education">
                <h3>education</h3>
                <p>software engineer</p>
                <p>iti bsuir</p>
                <p>2012-2018</p>
              </div>
            </div>
            <div className="main__content">
              <div className="main__profile">
                <h3>profile</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugit dolorem dolore illum quas dolores corporis earum enim at
                  recusandae repellendus ab nemo soluta dicta labore adipisci
                  culpa, vitae quod.Porro ut optio, accusantium iure nulla quod
                  totam voluptas quibusdam quo, nemo commodi suscipit ipsam,
                  facilis eos sint dolores mollitia labore neque at qui eaque
                  cum quos enim consequuntur. Quis?
                </p>
              </div>
              <div className="main__skills">
                <h3>skills</h3>
                <ul>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                  <li>
                    <span>Skill</span>
                  </li>
                </ul>
              </div>
              <div className="main__experience">
                <h3>work experience</h3>
                <p>Job Position Here</p>
                <p>2018-2019</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  iure excepturi velit dolores quo, ipsum tempore soluta
                  voluptatibus atque laudantium dolor quam temporibus corrupti?
                  Animi accusamus nam officiis deserunt harum.
                </p>
                <p>Job Position Here</p>
                <p>2018-2019</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  iure excepturi velit dolores quo, ipsum tempore soluta
                  voluptatibus atque laudantium dolor quam temporibus corrupti?
                  Animi accusamus nam officiis deserunt harum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
