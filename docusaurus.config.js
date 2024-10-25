const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KH Frontity Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://whale-agency.github.io',
  baseUrl: '/kh-frontity-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/whale.svg',
  organizationName: 'Whale-Agency', // Usually your GitHub org/user name.
  projectName: 'kh-frontity-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'KH Frontity Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/whale.svg',
      },
      items: [
        {
          href: 'https://github.com/Whale-Agency/kh-frontity-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Whale Agency, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/Whale-Agency/kh-frontity-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
