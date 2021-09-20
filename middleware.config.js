module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'alleco-dev.myshopify.com',
          storefrontAccessToken: '59ba2bd05884a1dfcc23e57fd713236f'
        },
        currency: 'DKK',
        country: 'DA'
      }
    }
  }
};
