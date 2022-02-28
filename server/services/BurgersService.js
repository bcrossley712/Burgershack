import { dbContext } from "../db/DbContext"


class BurgersService {
  async removeBurger(burgerId) {
    let index = await dbContext.Burgers.findIndex(b => b.id.toString() === burgerId)
    if (index === -1) {
      throw new Error(`Burger not found at ${burgerId}`)
    }
    dbContext.Burgers.splice(index, 1)
    return 'Deleted burger'
  }
  async create(body) {
    const newBurger = await dbContext.Burgers.push(body)
    return body
  }
  async getAll() {
    const burgers = await dbContext.Burgers
    return burgers
  }

}

export const burgersService = new BurgersService()