const express = require("express");
const { getAllPlansController, createPlanController, getPlanController, updatePlanController, deletePlanController } = require("../controller/planController");
const planRouter = express.Router();


// planRouter.get("/",)
// planRouter.post("/",)
//alternative of above through routes id
planRouter.route("/")
    .get(getAllPlansController)
    .post(createPlanController)


planRouter.route("/:planRoutes")
    .get(getPlanController)
    .patch(updatePlanController)
    .delete(deletePlanController)

module.exports = planRouter