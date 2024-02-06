import { Avo } from './avocado.model'

const avo: Avo[] = [
  {
    id: "T34PI7BGF",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  }
]


export default {
  listAvos() {
    return [
      {
        url: 'XXXXXXXXXXXXXXXXXX',
        name: 'XXXXXXXXXXXXXXXXXX',
        title: 'XXXXXXXXXXXXXXXXXX',
        price: 123,
        image: 'XXXXXXXXXXXXXXXXXX',
        SKU: 'XXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXX',
        attributes: {
          Shape: 'XXXXXXXXXXXXXXXXXX',
          Hardiness: 123,
          Taste: 'XXXXXXXXXXXXXXXXXX',
        }
      },
      {
        url: 'XXXXXXXXXXXXXXXXXX',
        name: 'XXXXXXXXXXXXXXXXXX',
        title: 'XXXXXXXXXXXXXXXXXX',
        price: 123,
        image: 'XXXXXXXXXXXXXXXXXX',
        SKU: 'XXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXX',
        attributes: {
          Shape: 'XXXXXXXXXXXXXXXXXX',
          Hardiness: 123,
          Taste: 'XXXXXXXXXXXXXXXXXX',
        }
      },
      {
        url: 'XXXXXXXXXXXXXXXXXX',
        name: 'XXXXXXXXXXXXXXXXXX',
        title: 'XXXXXXXXXXXXXXXXXX',
        price: 123,
        image: 'XXXXXXXXXXXXXXXXXX',
        SKU: 'XXXXXXXXXXXXXXXXXX',
        description: 'XXXXXXXXXXXXXXXXXX',
        attributes: {
          Shape: 'XXXXXXXXXXXXXXXXXX',
          Hardiness: 123,
          Taste: 'XXXXXXXXXXXXXXXXXX',
        }
      },
    ]
  },

  oneAvo() {
    return {
      url: 'XXXXXXXXXXXXXXXXXX',
      name: 'XXXXXXXXXXXXXXXXXX',
      title: 'XXXXXXXXXXXXXXXXXX',
      price: 123,
      image: 'XXXXXXXXXXXXXXXXXX',
      SKU: 'XXXXXXXXXXXXXXXXXX',
      description: 'XXXXXXXXXXXXXXXXXX',
      attributes: {
        Shape: 'XXXXXXXXXXXXXXXXXX',
        Hardiness: 123,
        Taste: 'XXXXXXXXXXXXXXXXXX',
      }
    }
  },

  addAvo() {
    console.log('Create avo');
  }
}
