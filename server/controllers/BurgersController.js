import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";


export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:burgerId', this.removeBurger)
  }

  async getAll(req, res, next) {
    try {
      const burgers = await burgersService.getAll()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      // logger.log(req.body)
      const newBurger = await burgersService.create(req.body)
      return res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
  async removeBurger(req, res, next) {
    try {
      const removedBurger = await burgersService.removeBurger(req.params.burgerId)
      return res.send(removedBurger)
    } catch (error) {
      next(error)
    }
  }
}