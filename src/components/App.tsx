import * as React from 'react';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const contacts = {
  title: 'Contacts',
  data: [
    {
      icon: '/img/social-SVG-sprite.svg#smartphone',
      link: 'tel:380969148332',
      text: '+38 096 914 83 32',
    },
    {
      icon: '/img/social-SVG-sprite.svg#gmail',
      link: 'mailto:yevhen.shmatko@gmail.com',
      text: 'yevhen.shmatko@gmail.com',
    },
    {
      icon: '/img/social-SVG-sprite.svg#github',
      link: 'https://github.com/YEvhen-SHmatko',
      text: 'Github',
    },
    {
      icon: '/img/social-SVG-sprite.svg#linkedin',
      link: 'https://www.linkedin.com/in/yevhen-shmatko',
      text: 'Linkedin',
    },
    {
      icon: '/img/social-SVG-sprite.svg#telegram',
      link: 'https://t.me/YEvhenSHmatko',
      text: 'Telegram',
    },
  ],
};

const App = () => (
  <>
    <div className="container">
      <a
        target="blank"
        className="download"
        href="https://drive.google.com/open?id=1FkurYEFqXUPB2rJ0evvHg38lGD944KZq"
      >
        <svg className="download-icon">
          <use xlinkHref="./img/social-SVG-sprite.svg#file" />
        </svg>
      </a>
      <aside className="aside">
        <div className="aside__photo" />
        <div className="aside__infoSection">
          <h3 className="aside__title">{contacts.title}</h3>
          <ul className="aside__list aside__list-contacts">
            {contacts?.data?.length &&
              contacts.data.map(contact => (
                <li className="aside__item" key=''>
                  <svg className="aside__item-icon">
                    <use xlinkHref="./img/social-SVG-sprite.svg#smartphone" />
                  </svg>
                  <a className="aside__item-link" href="tel:380969148332">
                    +38 096 914 83 32
                  </a>
                </li>
              ))}
            <li className="aside__item">
              <svg className="aside__item-icon">
                <use xlinkHref="./img/social-SVG-sprite.svg#smartphone" />
              </svg>
              <a className="aside__item-link" href="tel:380969148332">
                +38 096 914 83 32
              </a>
            </li>
            <li className="aside__item">
              <svg className="aside__item-icon">
                <use xlinkHref="./img/social-SVG-sprite.svg#gmail" />
              </svg>
              <a
                className="aside__item-link"
                href="mailto:yevhen.shmatko@gmail.com"
              >
                yevhen.shmatko@gmail.com
              </a>
            </li>
            <li className="aside__item">
              <svg className="aside__item-icon">
                <use xlinkHref="./img/social-SVG-sprite.svg#github" />
              </svg>
              <a
                target="blank"
                className="aside__item-link"
                href="https://github.com/YEvhen-SHmatko"
              >
                Github
              </a>
            </li>
            <li className="aside__item">
              <svg className="aside__item-icon">
                <use xlinkHref="./img/social-SVG-sprite.svg#linkedin" />
              </svg>
              <a
                target="blank"
                className="aside__item-link"
                href="https://www.linkedin.com/in/yevhen-shmatko"
              >
                Linkedin
              </a>
            </li>
            <li className="aside__item">
              <svg className="aside__item-icon">
                <use xlinkHref="./img/social-SVG-sprite.svg#telegram" />
              </svg>
              <a
                target="blank"
                className="aside__item-link"
                href="https://t.me/YEvhenSHmatko"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
        <div className="aside__infoSection">
          <h3 className="aside__title">Tech Skills</h3>
          <ul className="aside__list">
            <li>
              <span className="aside__item-title">Basic</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">HTML5</span>
                </li>
                <li>
                  <span className="aside__item">CSS3</span>
                </li>
                <li>
                  <span className="aside__item">JavaScript (ES6+)</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="aside__item-title">JS frameworks</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">Node.js</span>
                </li>
                <li>
                  <span className="aside__item">React.js / React hooks</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="aside__item-title">Styles components</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">Materialize</span>
                </li>
                <li>
                  <span className="aside__item">Bootstrap</span>
                </li>
                <li>
                  <span className="aside__item">Material UI</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="aside__item-title">Animation</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">SVG animation</span>
                </li>
                <li>
                  <span className="aside__item">css animation</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="aside__item-title">Database</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">MongoDB</span>
                </li>
                <li>
                  <span className="aside__item">Firebase</span>
                </li>
                <li>
                  <span className="aside__item">SQLite</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="aside__item-title">Maps</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">Google map api</span>
                </li>
                <li>
                  <span className="aside__item">
                    Open street map - Leaflet API
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span className="aside__item-title">Others technology</span>
              <ul className="aside__sub-list">
                <li>
                  <span className="aside__item">Redux</span>
                </li>
                <li>
                  <span className="aside__item">Rest Api</span>
                </li>
                <li>
                  <span className="aside__item">GIT</span>
                </li>
                <li>
                  <span className="aside__item">Gulp</span>
                </li>
                <li>
                  <span className="aside__item">WebPack</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="aside__infoSection">
          <h3 className="aside__title">Soft Skills</h3>
          <ul className="aside__list">
            <li>
              <span className="aside__item-title">Scrum</span>
            </li>
            <li>
              <span className="aside__item-title">Agile</span>
            </li>
            <li>
              <span className="aside__item-title">GTD</span>
            </li>
            <li>
              <span className="aside__item-title">Teamwork</span>
            </li>
          </ul>
        </div>
      </aside>
      <div className="main">
        <div className="aboutMe__section">
          <h2 className="aboutMe__position">Full-stack Developer</h2>
          <h1 className="aboutMe__name">Yevhen Shmatko</h1>
          <p className="aboutMe__description">
            Experience in developing web applications in JavaScript / HTML /
            CSS. There is also development experience using React.js and
            Node.js. I work with layouts in graphic programs such as Photoshop,
            Figma, Avocode. Basic knowledge of WordPress and installing it on a
            local server using Xampp. Basic knowledge of jQuery library. I have
            good analytical skills. Attentive to details, easy to learn,
            purposeful, teamwork, creativity and willingness to look at things
            from an unusual angle. The pursuit of continuous development.
          </p>
        </div>
        <div className="projects__section">
          <h3 className="main__title">Projects</h3>
          <ul className="main__list main__list-projects">
            <li className="main__item main__item-projects">
              1.
              <a
                target="blank"
                className="project__link"
                href="https://yevhen-shmatko-full-stack-developer.netlify.com/"
              >
                Resume
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [<span className="project__skils-text">HTML5 / CSS3</span>]
              </span>
            </li>
            <li className="main__item main__item-projects">
              2.
              <a
                target="blank"
                className="project__link"
                href="https://chacknorris-yevhen-shmatko.netlify.app/"
              >
                Chacknorris
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  React.js / React hooks / Material UI / API - CHUCKNORRIS.IO
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              3.
              <a
                target="blank"
                className="project__link"
                href="https://maxwillow.github.io/love_lodestone/login.html"
              >
                Love Lodestone
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  JavaScript / HTML5 / CSS3 / Webpack / Scrum / RestAPI
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              4.
              <a
                target="blank"
                className="project__link"
                href="https://yesh-timertodo.netlify.com/"
              >
                Todo timer
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  React.js / JavaScript / HTML5 / CSS3
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              5.
              <a
                target="blank"
                className="project__link"
                href="https://yesh-phonebook.netlify.com/"
              >
                Phonebook
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  React.js / Redux / JavaScript / HTML5 / CSS3
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              6.
              <a
                target="blank"
                className="project__link"
                href="https://yesh-bitmedia-labs.netlify.app/"
              >
                AppCo
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  React.js / Node.js / SQlite / HTML / SCSS / jQuery
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              7.
              <a
                target="blank"
                className="project__link"
                href="https://yesh-find-movies.netlify.com/"
              >
                Movie finder
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  React.js / JavaScript / HTML5 / CSS3 / API - THE MOVIE DB
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              8.
              <a
                target="blank"
                className="project__link"
                href="https://yevhen-shmatko.github.io/goit-react-hw-03-image-finder/"
              >
                Image finder
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  React.js / JavaScript / HTML5 / CSS3 / API - PIXABAY
                </span>
                ]
              </span>
            </li>
            <li className="main__item main__item-projects">
              9.
              <a
                target="blank"
                className="project__link"
                href="https://yevhen-shmatko.github.io/html_css_project_team_B/build/"
              >
                GoITeens
              </a>
              <span className="project__separator" />
              <span className="project__skils">
                [
                <span className="project__skils-text">
                  HTML5 / CSS3 / JavaScript / GULP / SCSS / Scrum
                </span>
                ]
              </span>
            </li>
          </ul>
        </div>
        <div className="experience__section">
          <h3 className="main__title">Work Experience</h3>
          <div className="company__section">
            <h4 className="experience__title">
              Front-End Developer <span className="otherColor">Freelance</span>
            </h4>
            <span className="experience__date">
              September 2019 - up to now
              <span className="blackColor">|</span>
              Ukraine
            </span>
            <ul className="experience__list">
              <li className="experience__item">Landing creation.</li>
              <li className="experience__item">
                Adding new functionality to the site.
              </li>
              <li className="experience__item">
                Landing editing for mobile first. Using bootstrap
              </li>
              <li className="experience__item">
                Participating in the development of an application for a
                restaurant or cafe.
              </li>
            </ul>
          </div>
          <div className="company__section">
            <h4 className="experience__title">
              Lead System Administrator
              <span className="otherColor">BAYADERA GROUP</span>
            </h4>
            <span className="experience__date">
              March 2018 - August 2019
              <span className="blackColor">|</span>
              Ukraine
            </span>
            <ul className="experience__list">
              <li className="experience__item">
                Development of JavaScript scripts for implementing OSM maps in
                1C.
              </li>
              <li className="experience__item">
                Implementation of monitoring movement along a given route.
              </li>
              <li className="experience__item">
                Drawing route and markers on the map.
              </li>
              <li className="experience__item">
                Risus commodo viverra maecenas.
              </li>
              <li className="experience__item">
                Setup and administration of server operating systems of the
                Windows, Linux family.
              </li>
            </ul>
          </div>
          <div className="company__section">
            <h4 className="experience__title">
              System Administrator
              <span className="otherColor">BAYADERA GROUP</span>
            </h4>
            <span className="experience__date">
              June 2016 - March 2018
              <span className="blackColor">|</span>
              Ukraine
            </span>
            <ul className="experience__list">
              <li className="experience__item">
                Implementation of access control system.
              </li>
              <li className="experience__item">
                Administration of MS Exchange and AD.
              </li>
              <li className="experience__item">
                Setup and administration of server operating systems of the
                Windows, Linux family.
              </li>
              <li className="experience__item">
                Maintenance of a local network and administration of network
                equipment and IP telephony.
              </li>
              <li className="experience__item">
                Installations and settings of desktop operating systems of the
                Windows and Linux family.
              </li>
            </ul>
          </div>
        </div>
        <div className="education__section">
          <h3 className="main__title">Education</h3>
          <div className="school__section">
            <h4 className="education-title otherColor">GoIT</h4>
            <h5 className="education-position">Full Stack Developer</h5>
            <span className="education-date">
              March 2019 - up to now
              <span className="blackColor">|</span>
              Ukraine
            </span>
          </div>
          <div className="school__section">
            <h4 className="education-title otherColor">
              Kiev College of Computer Technology and Economics
            </h4>
            <h5 className="education-position">Construction Technician</h5>
            <span className="education-date">
              Septermber 2009 - June 2011
              <span className="blackColor">|</span>
              Ukraine
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
