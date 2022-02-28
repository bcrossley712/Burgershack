import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Burgers = [{ id: 1, name: 'Big Boy', price: 8.99 }, { id: 2, name: 'Small Boy', price: 5.99 }]
}

export const dbContext = new DbContext()
