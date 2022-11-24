const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'EDEN Network',
  tagline: 'EDEN',
  url: 'https://cosmic-bublanina-39bfbc.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Arch-Matt', // Usually your GitHub org/user name.
  projectName: 'edenv3', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/m-grid.2.0.0.css'),
            require.resolve('./src/css/slick.css'),
            require.resolve('./src/css/slick-theme.css'),
            require.resolve('./src/css/custom.css')
          ],
        },
      }),
    ],
  ],
 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      navbar: {
        logo: {
          alt: 'EDEN Logo',
          src: 'img/eden-logo-white.svg',
        },
        items: [
          {
            type: 'doc', 
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://google.co.uk',
            label: 'Launch App',
            position: 'right',
          },
        ],
      },
      colorMode:{
        disableSwitch:true,
      },
      footer: {
        style: 'dark',
        logo:{
          src: 'img/eden-logo-white.svg',
        },
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Eden Relay',
                to: '/docs/intro',
              },
              {
                label: 'Eden RPC',
                to: '/docs/intro',
              },
              {
                label: 'EDEN Token',
                to: '/docs/intro',
              },
              {
                label: 'yyAVAX on Yield Yak',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Github',
                to: '/docs/intro',
              },
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Eden Network',
                to: '/docs/intro',
              },
              {
                label: 'Linkedin',
                to: '/docs/intro',
              },
              {
                label: 'Brand Assets',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html:'<a href="" class="footer__link-item footer-social twitter" target="_blank">Twitter</a>'
              },
              {
                html:'<a href="" class="footer__link-item footer-social discord" target="_blank">Discord</a>'
              },
              {
                html:'<a href="" class="footer__link-item footer-social medium" target="_blank">Medium</a>'
              },
              {
                html:'<a href="" class="footer__link-item footer-social telegram" target="_blank">Telegram</a>'
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms',
                to: '/docs/intro',
              },
              {
                label: 'Privacy',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `© Eden Network ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
