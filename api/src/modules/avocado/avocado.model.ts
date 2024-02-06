import { BaseModel } from './../base/base.model'

export type Attributes = {
  description: String
  shape: String
  hardiness: String
  taste: String
}

export type Avo = BaseModel & {
  name: String
  SKU: String
  price: Number
  image: String
  attributes: Attributes
}
