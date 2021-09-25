module.exports = {
    site: {
        port: process.env.PORT ?? 3000,
        secret: process.env.CLIENT_SECRET ?? "rejsaiewsdamsa",
        url: "https://dislist-production.up.railway.app",
    },
    channels: {
        loginLogs: "890244366189350953",
        errorLogs: "890175972207394847",
        botLogs: "891338310339919892",
    },
    roles: {
        reviewer: "890204725448962080",
    },
    emojis: {
        approved: "<:YesMark:891123032725282877>",
    },
    servers: {
        main: {
            id: "887493135649894440",
            invite: "https://discord.com/invite/eJaF88zwcM",
        },
    },
    owners: ["815204465937481749", "797266146000633888"],
    prefix: "d/",
    dbCacheRefreshInterval: 1 * 60 * 60 * 1000, //refresh db cache every hour
};
