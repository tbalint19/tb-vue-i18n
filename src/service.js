import Vue from 'vue'

export default class LanguageService {
  constructor() {
    this.chosenLang = 'eng'
    this.setLang = this.setLang.bind(this)
    this.lookup = this.lookup.bind(this)
  }

  setLang(language) {
    this.chosenLang = language
    this.core.dictionary = this.config[language]
  }

  lookup(textRef) {
    return this.core.dictionary[textRef] || textRef + ':' + this.chosenLang
  }

  setUp(config) {
    this.config = config
    this.core = new Vue({data: {dictionary: this.config[this.chosenLang]}})
  }

}
