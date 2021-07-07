const express = require("express");

const router = express.Router();

const projectDb = require("../data/helpers/projectModel");

const { validateProjectPost, validateProjectId } = require("../Middleware/validation");

router.get("/", async(req, res, next) => {
    let data = await projectDb.get();

    if (data) {
        res.json(data);
    } else {
        next("Internal Error");
    };
});

router.get("/:id", validateProjectId(), async(req, res) => {
    res.json(req.project);
});

router.get("/actions/:id", validateProjectId(), async(req, res,next) => {
    let project = await projectDb.getProjectActions(req.params.id);

    if (project) {
        res.json(project);
    } else {
        next("Internal Error");
    };
});

router.post("/", validateProjectPost(), async(req, res, next) => {
    let project = await projectDb.insert(req.body);

    if (project) {
        res.status(201).json(project);
    } else {
        next("Internal Error");
    };
});

router.delete("/:id", validateProjectId(), async(req, res, next) => {
    let project = await projectDb.remove(req.params.id);

    if (project) {
        res.json(project);
    } else {
        next("Internal Error");
    };
});

router.put("/:id", validateProjectId(), validateProjectPost(), async(req, res, next) => {
    let project = await projectDb.update(req.params.id, req.body);

    if (project) {
        res.json(project);
    } else {
        next("Internal Error");
    };
});


module.exports = router;