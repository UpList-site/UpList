/**
 * DisList
 * Copyright (c) 2021 The DisList Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
//const { CheckAuth } = global;
const express = require("express");
const router = express.Router();
//GET /bot/:botId
router.get("/:botId", async (req, res) => {
    const { client } = req;
    const id = parseInt(req.params.botId);
    let bot = null;
    try {
        bot = await client.users.fetch(id);
    } catch (e) {
        if (client.debug) console.log(e, id);
        return res.redirect(
            "/bots?error=true&message=" + encodeURIComponent("Invalid bot ID")
        );
    }
    let botDB = null;
    try {
        botDB = await client.db.findBot(bot.id);
    } catch (e) {
        if (client.debug) console.log(e);
        return res.redirect(
            "/bots?error=true&message=" +
                encodeURIComponent("Bot not found in DB")
        );
    }
    res.render("bot", {
        req,
        bot,
        botDB,
    });
});
module.exports = router;
