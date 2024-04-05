const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const car = await tables.car.readAll();
    res.json(car);
  } catch (err) {
    next(err);
  }
};
const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await tables.car.read(id);
    res.json(car);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const carInfos = {
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    year: req.body.year,
    mileage: req.body.mileage,
    fuel_type: req.body.fuel_type,
    image_URL: req.body.image_URL,
  };

  try {
    const result = await tables.car.create(carInfos);
    console.info(result);
    res.status(200).json({
      msg: "annonce enregistrée avec succès",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const carInfos = {
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    year: req.body.year,
    mileage: req.body.mileage,
    fuel_type: req.body.fuel_type,
    id: req.params.id,
  };

  try {
    const result = await tables.car.update(carInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "annonce introuvable" });
    } else {
      res.json({ msg: "annonce modifiée avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.car.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "annonce introuvable" });
    } else {
      res.json({ msg: "annonce supprimée avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  update,
  destroy,
};
