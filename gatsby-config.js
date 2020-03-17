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
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: "UA-138863210-1",

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,

    //     // Specify optional GTM environment details.
    //     // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
    //     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
    //     // dataLayerName: "YOUR_DATA_LAYER_NAME",
    //   },
    // },
 ],
}
