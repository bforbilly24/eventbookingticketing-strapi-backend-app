module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env(
    "PUBLIC_URL",
    "https://eventbookingticketing-backend.bforbilly.tech"
  ),
  app: {
    keys: env.array("APP_KEYS"),
  },
  proxy: true,
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
