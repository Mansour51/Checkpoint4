const AbstractManager = require("./AbstractManager");

class CarManager extends AbstractManager {
  constructor() {
    super({ table: "car" });
  }

  // The C of CRUD - Create operation

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id =?`,
      [id]
    );
    return rows;
  }

  async create(carInfos) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (make, model, price, year, mileage, fuel_type, image_URL) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        carInfos.make,
        carInfos.model,
        carInfos.price,
        carInfos.year,
        carInfos.mileage,
        carInfos.fuel_type,
        carInfos.image_URL,
      ]
    );
    return rows;
  }

  async update(carInfos) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET make=?, model=?, price=?, year=?, mileage=?, fuel_type=? WHERE id=?`,
      [
        carInfos.make,
        carInfos.model,
        carInfos.price,
        carInfos.year,
        carInfos.mileage,
        carInfos.fuel_type,
        carInfos.id,
      ]
    );
    return rows;
  }

  async destroy(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CarManager;
