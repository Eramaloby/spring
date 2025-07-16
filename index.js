const appData = {
  projectsBlockContent: [
    {
      name: 'Spring Boot',
      description:
        'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
      currentVersion: '3.5.3',
      versionsCount: 9,
      src: 'https://spring.io/img/projects/spring-boot.svg',
    },
    {
      name: 'Spring Framework',
      description:
        'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
      currentVersion: '6.2.8',
      versionsCount: 8,
      src: 'https://spring.io//img/projects/spring-framework.svg?v=2',
    },
    {
      name: 'Spring Data',
      description:
        'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
      currentVersion: '2025.0.1',
      versionsCount: 6,
      src: 'https://spring.io//img/projects/spring-data.svg',
    },
    {
      name: 'Spring Cloud',
      description:
        'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
      currentVersion: '2025.0.0',
      versionsCount: 9,
      src: 'https://spring.io//img/projects/spring-cloud.svg',
    },
    {
      name: 'Spring Cloud Data Flow',
      description:
        'Provides an orchestration service for composable data microservice applications on modern runtimes.',
      currentVersion: '2.11.5',
      versionsCount: 7,
      src: 'https://spring.io//img/projects/spring-data-flow.svg',
    },
    {
      name: 'Spring Cloud Data Flow',
      description:
        'Protects your application with comprehensive and extensible authentication and authorization support.',
      currentVersion: '6.5.1',
      versionsCount: 10,
      src: 'https://spring.io/img/projects/spring-security.svg',
    },
  ],
  navbarContent: [
    {
      label: 'Why Spring',
      data: [
        'Overview',
        'Generative AI',
        'Microservices',
        'Reactive',
        'Event Driven',
        'Cloud',
        'Web Applications',
        'Serverless',
        'Batch',
      ],
    },
    {
      label: 'Learn Content',
      data: ['Overview', 'Quickstart', 'Guides', 'Blog', 'Security Advisors'],
    },
    {
      label: 'Projects Content',
      data: [
        'Overview',
        'Spring Boot',
        'Spring Framework',
        'Spring Cloud',
        'Spring Cloud Data Flow',
        'Spring Data',
        'Spring Integration',
        'Spring Batch',
        'Spring Security',
        { name: 'Spring AI', isLast: true },
        'Release Calendar',
        { name: 'Security advisories', isLast: true },
        { name: 'DEVELOPMENT TOOLS' },
        'Spring Tools',
        'Spring Initializr',
      ],
    },
    { label: 'Academy', data: ['Courses', 'Get Certified'] },
    { label: 'Community', data: ['Overview', 'Events', 'Authors'] },
    { label: 'Tanzu Spring' },
  ],
};

const addContentToNavigationMenu = (data) => {
  const navigationMenuContainer = document.getElementById('nav-menu');
  console.log(navigationMenuContainer);
  if (navigationMenuContainer) {
    const ulSections = document.createElement('ul');
    ulSections.setAttribute('id', 'ul-sections');
    ulSections.classList.add('nav-menu-section');
    data.forEach((item) => {
      const liSection = document.createElement('li');

      liSection.classList.add('nav-links__item');
      liSection.classList.add('has-dropdown');
      liSection.classList.add('nav-links__item-nav-menu');
      liSection.setAttribute('id', item.label);

      const spanLabel = document.createElement('span');
      spanLabel.classList.add('dropdown-toggle');
      spanLabel.classList.add('span-nav-menu');
      spanLabel.textContent = item.label;

      const ulSectionContent = document.createElement('ul');

      if (item.data) {
        liSection.addEventListener('click', () =>
          showSectionContent(item.label)
        );
        spanLabel.appendChild(createArrowDownSvg());
        ulSectionContent.classList.add('dropdown-menu');
        ulSectionContent.classList.add('dropdown-nav-menu');
        item.data.forEach((i) => {
          const li = document.createElement('li');
          const a = document.createElement('a');

          if (typeof i === 'object') {
            if (i.isLast) {
              li.classList.add('last-item');
            }
            a.setAttribute('href', '#');
            a.textContent = i.name;
          } else {
            a.textContent = i;
          }
          li.appendChild(a);
          ulSectionContent.appendChild(li);
        });
      }

      liSection.appendChild(spanLabel);
      liSection.appendChild(ulSectionContent);

      ulSections.appendChild(liSection);
    });
    navigationMenuContainer.appendChild(ulSections);
  }
};

const createArrowDownSvg = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttribute('class', 'arrow-down arrow-down-nav-menu');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');

  const polyline = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'polyline'
  );

  polyline.setAttribute('points', '6 9 12 15 18 9');

  svg.appendChild(polyline);

  return svg;
};

addContentToNavigationMenu(appData.navbarContent);

function showSectionContent(label) {
  const ulSections = document.getElementById('ul-sections');
  for (const i of ulSections.children) {
    i.children[1].classList.remove('show');
  }
  const item = document.getElementById(label);
  const ul = item.children[1];
  ul.classList.add('show');
}

const showNavigation = () => {
  const navigationMenu = document.getElementById('nav-menu');
  navigationMenu.classList.add('show');
};

const closeNavigationMenu = () => {
  const navigationMenu = document.getElementById('nav-menu');
  navigationMenu.classList.remove('show');
};
