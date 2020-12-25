import * as React from 'react';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const contacts = {
  title: 'Contacts',
  data: [
    {
      id: 'contact_1',
      icon: '/img/social-SVG-sprite.svg#smartphone',
      link: 'tel:380969148332',
      text: '+38 096 914 83 32',
    },
    {
      id: 'contact_2',
      icon: '/img/social-SVG-sprite.svg#gmail',
      link: 'mailto:yevhen.shmatko@gmail.com',
      text: 'yevhen.shmatko@gmail.com',
    },
    {
      id: 'contact_3',
      icon: '/img/social-SVG-sprite.svg#github',
      link: 'https://github.com/YEvhen-SHmatko',
      text: 'Github',
    },
    {
      id: 'contact_4',
      icon: '/img/social-SVG-sprite.svg#linkedin',
      link: 'https://www.linkedin.com/in/yevhen-shmatko',
      text: 'Linkedin',
    },
    {
      id: 'contact_5',
      icon: '/img/social-SVG-sprite.svg#telegram',
      link: 'https://t.me/YEvhenSHmatko',
      text: 'Telegram',
    },
  ],
};

const techSkills = {
  title: 'Tech Skills',
  data: [
    {
      id: 'techSkills_1',
      title: 'Basic',
      data: [
        {
          id: 'techSkills_1_1',
          text: 'HTML5',
        },
        {
          id: 'techSkills_1_2',
          text: 'CSS3',
        },
        {
          id: 'techSkills_1_3',
          text: 'JavaScript (ES6+)',
        },
        {
          id: 'techSkills_1_4',
          text: 'TypeScript',
        },
      ],
    },
    {
      id: 'techSkills_2',
      title: 'JS frameworks',
      data: [
        {
          id: 'techSkills_2_1',
          text: 'Node.js',
        },
        {
          id: 'techSkills_2_2',
          text: 'React.js / React hooks',
        },
      ],
    },
    {
      id: 'techSkills_3',
      title: 'Styles components',
      data: [
        {
          id: 'techSkills_3_1',
          text: 'Materialize',
        },
        {
          id: 'techSkills_3_2',
          text: 'Material UI',
        },
        {
          id: 'techSkills_3_3',
          text: 'Bootstrap',
        },
      ],
    },
    {
      id: 'techSkills_4',
      title: 'Animation',
      data: [
        {
          id: 'techSkills_4_1',
          text: 'SVG animation',
        },
        {
          id: 'techSkills_4_2',
          text: 'css animation',
        },
      ],
    },
    {
      id: 'techSkills_5',
      title: 'Database',
      data: [
        {
          id: 'techSkills_5_1',
          text: 'MongoDB',
        },
        {
          id: 'techSkills_5_2',
          text: 'Firebase',
        },
        {
          id: 'techSkills_5_3',
          text: 'SQLite',
        },
      ],
    },
    {
      id: 'techSkills_6',
      title: 'MAPS',
      data: [
        {
          id: 'techSkills_6_1',
          text: 'Google map api',
        },
        {
          id: 'techSkills_6_2',
          text: 'Open street map - Leaflet API',
        },
      ],
    },
    {
      id: 'techSkills_7',
      title: 'Others technology',
      data: [
        {
          id: 'techSkills_7_1',
          text: 'Redux',
        },
        {
          id: 'techSkills_7_2',
          text: 'Rest Api',
        },
        {
          id: 'techSkills_7_3',
          text: 'GIT',
        },
        {
          id: 'techSkills_7_4',
          text: 'Thunk',
        },
        {
          id: 'techSkills_7_5',
          text: 'Saga',
        },
        {
          id: 'techSkills_7_6',
          text: 'WebSockets',
        },
        {
          id: 'techSkills_7_7',
          text: 'TradingView',
        },
      ],
    },
  ],
};

const softSkills = {
  title: 'Soft Skills',
  data: [
    {
      id: 'softSkills_1',
      title: 'Scrum',
    },
    {
      id: 'softSkills_2',
      title: 'Agile',
    },
    {
      id: 'softSkills_3',
      title: 'GTD',
    },
    {
      id: 'softSkills_4',
      title: 'Teamwork',
    },
    {
      id: 'softSkills_5',
      title: 'TeamLead',
    },
  ],
};

const aboutMe = {
  position: 'Full-stack Developer',
  full_name: 'Yevhen Shmatko',
  description:
    'Experience in developing web applications in JavaScript / HTML / CSS. There is also development experience using React.js and Node.js. I work with layouts in graphic programs such as Photoshop, Figma, Avocode. Basic knowledge of WordPress and installing it on a local server using Xampp. Basic knowledge of jQuery library. I have good analytical skills. Attentive to details, easy to learn, purposeful, teamwork, creativity and willingness to look at things from an unusual angle. The pursuit of continuous development.',
};

const projects = {
  title: 'Projects',
  data: [
    {
      id: 'projects_1',
      link: 'https://yevhen-shmatko-full-stack-developer.netlify.com/',
      title: 'Resume',
      technology: ['HTML5', 'CSS3', 'JS', 'TS', 'React', 'i18n'],
    },
    {
      id: 'projects_2',
      link: 'https://chacknorris-yevhen-shmatko.netlify.app/',
      title: 'Chacknorris',
      technology: [
        'React',
        'React hooks',
        'Material UI',
        'API - CHUCKNORRIS.IO',
      ],
    },
    {
      id: 'projects_3',
      link: 'https://maxwillow.github.io/love_lodestone/login.html',
      title: 'Love Lodestone',
      technology: ['JS', 'HTML5', 'CSS3', 'Webpack', 'Scrum', 'RestAPI'],
    },
    {
      id: 'projects_4',
      link: 'https://yesh-timertodo.netlify.com/',
      title: 'Todo timer',
      technology: ['React', 'JS', 'HTML5', 'CSS3'],
    },
    {
      id: 'projects_5',
      link: 'https://yesh-phonebook.netlify.com/',
      title: 'Phonebook',
      technology: ['React', 'Redux', 'JS', 'HTML5', 'CSS3'],
    },
    {
      id: 'projects_6',
      link: 'https://yesh-bitmedia-labs.netlify.app/',
      title: 'AppCo',
      technology: ['React', 'Node', 'SQlite', 'HTML', 'SCSS', 'jQuery'],
    },
    {
      id: 'projects_7',
      link: 'https://yesh-find-movies.netlify.com/',
      title: 'Movie finder',
      technology: ['React', 'JS', 'HTML5', 'CSS3', 'API - THE MOVIE DB'],
    },
    {
      id: 'projects_8',
      link: 'https://yevhen-shmatko.github.io/goit-react-hw-03-image-finder/',
      title: 'Image finder',
      technology: ['React', 'JS', 'HTML5', 'CSS3', 'API - PIXABAY'],
    },
    {
      id: 'projects_9',
      link: 'https://yevhen-shmatko.github.io/html_css_project_team_B/build/',
      title: 'GoITeens',
      technology: ['HTML5', 'CSS3', 'JS', 'GULP', 'SCSS', 'Scrum'],
    },
  ],
};
const currentWorkTime: number =
  (new Date().getTime() - new Date('Mon Aug 10 2020').getTime()) /
  (1000 * 60 * 60 * 24 * 30);

const workExperience = {
  title: 'Work Experience',
  data: [
    {
      id: 'workExperience_5',
      position: 'Front-End(React) Developer / Team Lead',
      company: 'Merehead',
      company_link: '',
      period: 'August 2020 to now',
      time: `${Math.ceil(currentWorkTime)} month`,
      country: 'Ukraine',
      data: [
        {
          id: 'workExperience_1_2',
          text: 'Adding new functionality to the site.',
        },
        {
          id: 'workExperience_1_3',
          text: 'Сreation of trading platforms.',
        },
        {
          id: 'workExperience_1_4',
          text: 'Legacy Code Support.',
        },
      ],
    },
    {
      id: 'workExperience_4',
      position: 'Front-End(React) Developer',
      company: 'Merehead',
      company_link: '',
      period: 'June 2020 - August 2020',
      time: '2 month',
      country: 'Ukraine',
      data: [
        {
          id: 'workExperience_1_2',
          text: 'Adding new functionality to the site.',
        },
        {
          id: 'workExperience_1_3',
          text: 'Сreation of trading platforms.',
        },
        {
          id: 'workExperience_1_4',
          text: 'Legacy Code Support.',
        },
      ],
    },
    {
      id: 'workExperience_3',
      position: 'Front-End Developer',
      company: 'Freelance',
      period: 'September 2019 - June 2020',
      time: '8 month',
      country: 'Ukraine',
      data: [
        {
          id: 'workExperience_3_1',
          text: 'Landing creation.',
        },
        {
          id: 'workExperience_3_2',
          text: 'Adding new functionality to the site.',
        },
        {
          id: 'workExperience_3_3',
          text: 'Landing editing for mobile first. Using bootstrap',
        },
        {
          id: 'workExperience_3_4',
          text:
            'Participating in the development of an application for a restaurant or cafe.',
        },
      ],
    },
    {
      id: 'workExperience_2',
      position: 'Lead System Administrator',
      company: 'BAYADERA GROUP',
      period: 'March 2018 - August 2019',
      time: '1 year 5 month',
      country: 'Ukraine',
      data: [
        {
          id: 'workExperience_2_1',
          text:
            'Development of JavaScript scripts for implementing OSM maps in 1C.',
        },
        {
          id: 'workExperience_2_2',
          text: 'Implementation of monitoring movement along a given route.',
        },
        {
          id: 'workExperience_2_3',
          text: 'Drawing route and markers on the map.',
        },
        {
          id: 'workExperience_2_4',
          text:
            'Setup and administration of server operating systems of the Windows, Linux family.',
        },
      ],
    },
    {
      id: 'workExperience_1',
      position: 'System Administrator',
      company: 'BAYADERA GROUP',
      period: 'June 2016 - March 2018',
      time: '1 year 10 month',
      country: 'Ukraine',
      data: [
        {
          id: 'workExperience_1_1',
          text: 'Administration of MS Exchange and AD.',
        },
        {
          id: 'workExperience_1_2',
          text:
            'Setup and administration of server operating systems of the Windows, Linux family.',
        },
        {
          id: 'workExperience_1_3',
          text:
            'Maintenance of a local network and administration of network equipment and IP telephony.',
        },
        {
          id: 'workExperience_1_4',
          text:
            'Installations and settings of desktop operating systems of the Windows and Linux family.',
        },
        {
          id: 'workExperience_1_5',
          text: 'Implementation of access control system.',
        },
      ],
    },
  ],
};

const education = {
  title: 'Education',
  data: [
    {
      id: 'education_2',
      title: 'GoIT',
      subtitle: 'Full Stack Developer',
      period: 'March 2019 - March 2020',
      country: 'Ukraine',
    },
    {
      id: 'education_1',
      title: 'Kiev College of Computer Technology and Economics',
      subtitle: 'Design engineer, radio computing devices',
      period: 'Septermber 2009 - June 2011',
      country: 'Ukraine',
    },
  ],
};
const App = () => (
  <>
    <div className="container">
      {/* <a
        target="blank"
        className="download"
        href="https://drive.google.com/open?id=1FkurYEFqXUPB2rJ0evvHg38lGD944KZq"
      >
        <svg className="download-icon">
          <use xlinkHref="./img/social-SVG-sprite.svg#file" />
        </svg>
      </a> */}
      <aside className="aside">
        <div className="aside__photo" />
        <div className="aside__infoSection">
          <h3 className="aside__title">{contacts.title}</h3>
          <ul className="aside__list aside__list-contacts">
            {contacts?.data?.length &&
              contacts.data?.map(contact => (
                <li className="aside__item" key={contact?.id}>
                  <svg className="aside__item-icon">
                    <use xlinkHref={contact?.icon} />
                  </svg>
                  <a className="aside__item-link" href={contact?.link}>
                    {contact?.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="aside__infoSection">
          <h3 className="aside__title">{techSkills.title}</h3>
          <ul className="aside__list">
            {techSkills?.data?.length &&
              techSkills.data?.map(skills => (
                <li key={skills?.id}>
                  <span className="aside__item-title">{skills.title}</span>
                  <ul className="aside__sub-list">
                    {skills?.data?.length &&
                      skills.data.map(skill => (
                        <li key={skill?.id}>
                          <span className="aside__item">{skill.text}</span>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
        <div className="aside__infoSection">
          <h3 className="aside__title">{softSkills.title}</h3>
          <ul className="aside__list">
            {softSkills?.data?.length &&
              softSkills.data?.map(skill => (
                <li key={skill?.id}>
                  <span className="aside__item-title">{skill.title}</span>
                </li>
              ))}
          </ul>
        </div>
      </aside>
      <div className="main">
        <div className="aboutMe__section">
          <h2 className="aboutMe__position">{aboutMe.position}</h2>
          <h1 className="aboutMe__name">{aboutMe.full_name}</h1>
          <p className="aboutMe__description">{aboutMe.description}</p>
        </div>
        <div className="projects__section">
          <h3 className="main__title">{projects.title}</h3>
          <ul className="main__list main__list-projects">
            {projects?.data?.length &&
              projects?.data?.map((project, index) => (
                <li key={project.id} className="main__item main__item-projects">
                  {index + 1}.
                  <a
                    target="blank"
                    className="project__link"
                    href="https://yevhen-shmatko-full-stack-developer.netlify.com/"
                  >
                    {project.title}
                  </a>
                  <span className="project__separator" />
                  <span className="project__skils">
                    [
                    <span className="project__skils-text">
                      {project.technology.map((tech, ind) => {
                        if (project.technology.length - 1 === ind) {
                          return tech;
                        }
                        return `${tech} / `;
                      })}
                    </span>
                    ]
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="experience__section">
          <h3 className="main__title">{workExperience.title}</h3>
          {!!workExperience?.data?.length &&
            workExperience.data.map(work => (
              <div key={work.id} className="company__section">
                <h4 className="experience__title">
                  {work.position}
                  <span className="otherColor">{work.company}</span>
                </h4>
                <span className="experience__date">
                  {work.period}
                  <span className="blackColor">|</span>
                  {work.country}
                </span>
                <ul className="experience__list">
                  {work.data.length &&
                    work.data.map(expirience => (
                      <li key={expirience.id} className="experience__item">
                        {expirience.text}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="education__section">
          <h3 className="main__title">{education.title}</h3>

          {!!education?.data?.length &&
            education.data.map(ed => (
              <div key={ed.id} className="school__section">
                <h4 className="education-title otherColor">{ed.title}</h4>
                <h5 className="education-position">{ed.subtitle}</h5>
                <span className="education-date">
                  {ed.period}
                  <span className="blackColor">|</span>
                  {ed.country}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  </>
);

export default App;
