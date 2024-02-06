import { Avo } from './avocado.model'

const avos: Avo[] = [
  {
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,

    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    SKU: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description:
        "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado',
    },
  },
]

export function listAvos() {
  return avos;
}

export function findAvo() {
  return avos[0];
}

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
