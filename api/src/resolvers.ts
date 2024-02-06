import * as avo from './modules/avocado/avocado.resolver'

export default {
  Query: {
    avos: () => avo.listAvos,
    avo: () => avo.findAvo
  },
  Mutation: {
    addAvo: (_: any, {name}: any) => avo.default.addAvo
  }
}
