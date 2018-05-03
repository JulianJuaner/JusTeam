/**
* Project           : JusTeam/server
*
* Module name       : Router/searchSystem
*
* Author            : JIANG Chenyu
*
* Date created      : 20180323
*
* Purpose           : Router for search system. Also handles file upload.
*
* Revision History  :
*
* Date        Author      Ref    Revision (Date in YYYYMMDD format)
*
**/

var router = require("express").Router();
var searchSystem = require("../../SearchSystem");

router.get("/team", async (req, res, next) => {
    var queryString = req.query.query;
    var offset = 0;
    if (req.query.offset !== undefined) {
        offset = req.query.offset;
    }
    var limit = 20;
    if (req.query.limit !== undefined) {
        limit = req.query.limit;
    }
    var result = {};
    result = await searchSystem.searchTeam(queryString, offset, limit).catch((err)=>{});
    res.send(result);
});

router.get("/post", async (req, res, next) => {
    var queryString = req.query.query;
    var offset = 0;
    if (req.query.offset !== undefined) {
        offset = req.query.offset;
    }
    var limit = 20;
    if (req.query.limit !== undefined) {
        limit = req.query.limit;
    }
    var result = await searchSystem.searchPost(queryString, offset, limit);
    res.send(result);
});

module.exports = router;
