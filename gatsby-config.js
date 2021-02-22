module.exports = {
  siteMetadata: {
    title: "casecheck-frontend-test",
    siteUrl: 'https://gatsbystopbeingweird.com',
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
