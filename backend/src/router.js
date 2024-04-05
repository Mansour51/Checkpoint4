const express = require("express");
const carControllers = require("./controllers/carControllers");

// const offerControllers = require("./controllers/OfferControllers");

const router = express.Router();

router.get("/car", carControllers.browse);
router.get("/car/:id", carControllers.read);
router.post("/car", carControllers.add);
router.put("/car/:id", carControllers.update);
router.delete("/car/:id", carControllers.destroy);

// router.get("/offer", offerControllers.browse);
// router.get("/offer/:id", offerControllers.read);
// router.post("/offer", offerControllers.add);
// router.put("/offer/:id", offerControllers.edit);
// router.delete("/offer/:id", offerControllers.destroy);

module.exports = router;
