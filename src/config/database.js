require('dotenv').config()

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: !!process.env.DATABASE_URL,
            rejectUnauthorized: false,
        },
    },
    define: {
        freezeTableName: true,
        useUTC: false,
        timezone: '-03:00',
    },
}