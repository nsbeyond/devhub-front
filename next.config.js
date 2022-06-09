module.exports = {
  env: {
    APP_URL: 'http://localhost:3000',
    API_URL: 'http://localhost:5000/api/v1',
  },
  images: {
    domains: ['ap-smart-world-data.s3.amazonaws.com', 'ap-smart-world-data-new-uat.s3.amazonaws.com', 'ap-smart-world-data.s3.amazonaws.com', 's3-dev.apdigital.ai'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'th-TH'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'th-TH',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'localhost',
        defaultLocale: 'th-TH',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
