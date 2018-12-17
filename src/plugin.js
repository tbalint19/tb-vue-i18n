import LanguageService from './service'

export default class LanguagePlugin {
  static service = new LanguageService()

  static install(Vue, config) {
    LanguagePlugin.service.setUp(config)
    Vue.prototype.$i = LanguagePlugin.service.lookup
    Vue.prototype.$setLang = LanguagePlugin.service.setLang
  }
}
