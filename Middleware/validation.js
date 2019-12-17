const projectDb = require("../data/helpers/projectModel");

const actionDb = require("../data/helpers/actionModel");

const validateProjectPost = () => {
    return async(req, res, next) => {
        if (!req.body.name || !req.body.description || !req.body.completed) {
            return res.status(400).json({message: "Please provide all required credentials"});
        };
        next();
    };
};

const validateActionPost = () => {
    return async(req, res, next) => {
        if (!req.body.project_id || !req.body.description || !req.body.notes || !req.body.completed) {
            return res.status(400).json({message: "Please provide all required credentials"});
        };
        next();
    };
};

const validateProjectId = () => {
    return async(req, res, next) => {
        let project = await projectDb.get(req.params.id);

        if (project) {
            req.project = project;
            next();
        } else {
            return res.status(404).json({message: "No project with specified ID"});
        };
    };
};

const validateActionId = () => {
    return async(req, res, next) => {
        let action = await actionDb.get(req.params.id);

        if (action) {
            req.action = action;
            next();
        } else {
            return res.status(404).json({message: "No action with specified ID"});
        };
    };
};

module.exports = {
    validateProjectPost,
    validateActionPost,
    validateProjectId,
    validateActionId
}