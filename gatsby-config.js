module.exports = {
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: "casecheck-frontend-test",
    siteUrl: 'https://gatsbystopbeingweird.dev',
    url: "https://data.cityofchicago.org/resource/cwig-ma7x.json"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: 'gatsby-plugin-html-minifier',
      options: {
          caseSensitive: false,
          collapseBooleanAttributes: false,
          useShortDoctype: false
      }
    },
  ],
};
