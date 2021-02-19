module.exports = {
  siteMetadata: {
    title: "casecheck-frontend-test",
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
  ],
};
