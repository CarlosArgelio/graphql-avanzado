import * as avo from './modules/avocado/avocado.resolver'

export default {
  Query: {
    avos: () => avo.default.listAvos,
    avo: () => avo.default.oneAvo
  },
  Mutation: {
    addAvo: (_: any, {name}: any) => avo.default.addAvo
  }
}