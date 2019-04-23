module.exports = {
  siteMetadata: {
    title: 'JJ D\'Aurora',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      precision: 8,
    },
  },  
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138863210-1",
      },
  },
  
 ],
}
