module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "postgres"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "strapi"),
      ssl: env.bool(true),
      // ssl: {
      //   rejectUnauthorized: env.bool("PGSSL", false),
      // },
    },
    debug: false,
    acquireConnectionTimeout: 600000,
    pool: {
      min: 0,
      max: 100,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 50000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 10000,
      createRetryIntervalMillis: 2000,
      propagateCreateError: false,
    },
  },
});

// Reason for the above configuration was idle timeout database connection: https://forum.strapi.io/t/hosting-on-railway-401-error-after-inactivity/21748/11

// Configuration was suggested from this github issue(comment): https://github.com/strapi/strapi/issues/11860#issuecomment-1193357274
