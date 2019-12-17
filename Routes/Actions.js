const express = require("express");

const router = express.Router();

const actionDb = require("../data/helpers/actionModel");

const { validateActionPost, validateActionId } = require("../Middleware/validation");

router.get("/", async(req, res, next) => {
    let action = await actionDb.get();

    if (action) {
        res.json(action);
    } else {
        next("Internal Error");
    };
});

router.get("/:id", validateActionId(), async(req, res) => {
    res.json(req.action);
});

router.post("/", validateActionPost(), async(req, res, next) => {
    let action = await actionDb.insert(req.body);

    if (action) {
        res.status(201).json(action);
    } else {
        next("Internal Error");
    };
});

router.delete("/:id", validateActionId(), async(req, res, next) => {
    let action = await actionDb.remove(req.params.id);

    if (action) {
        res.json(action);
    } else {
        next("Internal Error");
    };
});

router.put("/:id", validateActionId(), validateActionPost(), async(req, res, next) => {
    let action = await actionDb.update(req.params.id, req.body);

    if (action) {
        res.json(action);
    } else {
        next("Internal Error");
    };
});

module.exports = router;