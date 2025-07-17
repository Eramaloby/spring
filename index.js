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
      label: 'Learn',
      data: ['Overview', 'Quickstart', 'Guides', 'Blog', 'Security Advisors'],
    },
    {
      label: 'Projects',
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
        { name: 'DEVELOPMENT TOOLS', isHeader: true },
        'Spring Tools',
        'Spring Initializr',
      ],
    },
    { label: 'Academy', data: ['Courses', 'Get Certified'] },
    { label: 'Community', data: ['Overview', 'Events', 'Authors'] },
    { label: 'Tanzu Spring' },
  ],
};

function main() {
  showProducts(appData.projectsBlockContent);
  showContentNavigationMenu(appData.navbarContent);
  showContentNavbar(appData.navbarContent);

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      performSearch(appData.projectsBlockContent);
    }, 300);
  });
}

main();

function performSearch(projects) {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filteredProducts = projects.filter((project) => {
    const nameMatches = project.name.toLowerCase().includes(searchTerm);
    const descriptionMatches = project.description
      .toLowerCase()
      .includes(searchTerm);
    return nameMatches || descriptionMatches;
  });
  showProducts(filteredProducts);
}

function showProducts(data) {
  const productsSection = document.getElementById('products-section');

  productsSection.innerHTML = '';

  if (data && data.length !== 0) {
    data.forEach((item) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const productIcon = createProductIcon(item.name, item.src);
      const productDescription = createProductDescription(item.description);
      const productVersion = createProductVersion(
        item.currentVersion,
        item.versionsCount
      );

      productCard.appendChild(productIcon);
      productCard.appendChild(productDescription);
      productCard.appendChild(productVersion);

      productsSection.appendChild(productCard);
    });
  } else {
    const noDataP = document.createElement('p');
    noDataP.textContent = 'No projects matching search terms';
    productsSection.appendChild(noDataP);
  }
}

function createProductVersion(currentV, vCount) {
  const productVersion = document.createElement('div');
  productVersion.classList.add('product-version');

  const versionBadge = document.createElement('span');
  versionBadge.textContent = currentV;
  versionBadge.classList.add('version-badge');

  const versionsCount = document.createElement('span');
  versionsCount.textContent = `+${vCount} versions`;
  versionsCount.classList.add('versions-count');

  productVersion.appendChild(versionBadge);
  productVersion.appendChild(versionsCount);

  return productVersion;
}

function createProductDescription(description) {
  const p = document.createElement('p');
  p.textContent = description;
  p.classList.add('product-description');

  return p;
}

function createProductIcon(name, src) {
  const productIcon = document.createElement('div');
  productIcon.classList.add('product-icon');

  const img = document.createElement('img');
  img.src = src;
  img.alt = name;

  const h3 = document.createElement('h3');
  h3.textContent = name;
  h3.classList.add('product-title');

  productIcon.appendChild(img);
  productIcon.appendChild(h3);

  return productIcon;
}

function showContentNavbar(data) {
  const navLinksList = document.getElementById('nav-links__list');
  if (data) {
    data.forEach((item) => {
      const navLinksItem = document.createElement('li');
      navLinksItem.classList.add('nav-links__item');
      if (item.data) {
        navLinksItem.classList.add('has-dropdown');

        const dropdownToggle = createDropdownToggle(item.label);
        const dropdownMenu = createDropdownMenu(item.data);

        navLinksItem.appendChild(dropdownToggle);
        navLinksItem.appendChild(dropdownMenu);
      } else {
        const span = document.createElement('span');
        span.textContent = item.label;
        navLinksItem.appendChild(span);
      }
      navLinksList.appendChild(navLinksItem);
    });
  }
}

function createDropdownToggle(label, className = '') {
  const span = document.createElement('span');
  span.classList.add('dropdown-toggle');
  if (className) {
    span.classList.add(className);
  }

  const arrow = createArrowDownSvg();
  span.textContent = label;
  span.appendChild(arrow);

  return span;
}

function createDropdownToggleNavigationMenu(label, className = '') {
  const span = document.createElement('span');
  span.classList.add('dropdown-toggle');
  if (className) {
    span.classList.add(className);
  }

  console.log(label);
  const arrow = createArrowDownSvg('arrow-down-nav-menu');
  console.log(arrow);
  span.textContent = label;
  span.appendChild(arrow);

  return span;
}

function createDropdownMenu(data, className = '') {
  const dropdownMenu = document.createElement('ul');
  dropdownMenu.classList.add('dropdown-menu');
  if (className) {
    dropdownMenu.classList.add(className);
  }
  data.forEach((item) => {
    const li = createDropdownItem(item);
    dropdownMenu.appendChild(li);
  });

  return dropdownMenu;
}

function createDropdownItem(strOrObj) {
  const item = document.createElement('li');

  const isLink =
    typeof strOrObj === 'string' ||
    (typeof strOrObj === 'object' && !strOrObj.isHeader);

  let contentElement;

  if (isLink) {
    contentElement = document.createElement('a');
    contentElement.setAttribute('href', '#');
  } else {
    contentElement = document.createElement('span');
    contentElement.classList.add('subsection-header');
  }

  if (typeof strOrObj === 'object' && strOrObj !== null) {
    if (strOrObj.isLast) {
      item.classList.add('last-item');
    }
    contentElement.textContent = strOrObj.name;
  } else {
    contentElement.textContent = strOrObj;
  }

  item.appendChild(contentElement);
  return item;
}

function showContentNavigationMenu(data) {
  const navigationMenuContainer = document.getElementById('nav-menu');

  if (navigationMenuContainer) {
    const ulSections = createUlSections('nav-menu-section');

    data.forEach((item) => {
      const navLinksItem = document.createElement('li');
      navLinksItem.classList.add('nav-links__item');
      navLinksItem.classList.add('nav-links__item-nav-menu');
      navLinksItem.setAttribute('id', item.label);

      if (item.data) {
        navLinksItem.classList.add('has-dropdown');

        const dropdownToggleSpan = createDropdownToggleNavigationMenu(
          item.label,
          'span-nav-menu'
        );

        const dropdownMenuUl = createDropdownMenu(
          item.data,
          'dropdown-nav-menu'
        );

        navLinksItem.addEventListener('click', () =>
          showSectionContent(item.label)
        );

        navLinksItem.appendChild(dropdownToggleSpan);
        navLinksItem.appendChild(dropdownMenuUl);
      } else {
        const simpleItemContent = document.createElement('span');
        simpleItemContent.textContent = item.label;
        simpleItemContent.classList.add('span-nav-menu');

        navLinksItem.appendChild(simpleItemContent);
      }

      ulSections.appendChild(navLinksItem);
    });

    navigationMenuContainer.appendChild(ulSections);
  }
}

function createUlSections(className = '') {
  const ulSections = document.createElement('ul');
  ulSections.setAttribute('id', 'ul-sections');
  if (className) {
    ulSections.classList.add(className);
  }
  return ulSections;
}

function createArrowDownSvg(className = '') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  if (className !== '') {
    svg.setAttribute('class', `arrow-down ${className}`);
  } else {
    console.log('in else', `afa${className}`);
    svg.setAttribute('class', 'arrow-down');
  }

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
}

function showSectionContent(label) {
  const ulSections = document.getElementById('ul-sections');
  const item = document.getElementById(label);

  const arrow = item.children[0].children[0];
  const targetUl = item.children[1];

  const isAlreadyOpen = targetUl.classList.contains('show');

  arrow.classList.remove('upside-down');

  for (const child of ulSections.children) {
    const dropdownContent = child.children[1];
    if (dropdownContent && dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }

  if (!isAlreadyOpen) {
    arrow.classList.add('upside-down');
    targetUl.classList.add('show');
  }
}

function showNavigation() {
  const navigationMenu = document.getElementById('nav-menu');
  navigationMenu.classList.add('open');
}

function closeNavigationMenu() {
  const navigationMenu = document.getElementById('nav-menu');
  navigationMenu.classList.remove('open');
}
