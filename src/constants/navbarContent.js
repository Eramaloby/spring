const NAVBAR_CONTENT = [
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
];

export default NAVBAR_CONTENT;
