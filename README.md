# Vue i18n plugin

### Usage

Install in your VueJS project:

```bash
npm i -s tb-vue-i18n
```

Import in __main.js__:

```javascript
import LanguagePlugin from 'tb-vue-i18n'
```

Create a language file in json format (e.g. dictionary.json):

```json
{
  "eng": {
    "navbar.title": "Title in english",
    "login.button": "Login in english"
  },

  "ger": {
    "navbar.title": "Something german",
    "login.button": "Some other german thing"
  }
}
```

And after importing the dictionary, install the plugin with it:

```javascript
import languageConfig from '../static/dictionary.json'

Vue.use(LanguagePlugin, languageConfig)
```



<hr>



And you are good to go!<br>
In your templates...
```html
<div class="my-navbar">{{ $i('navbar.title') }}</div>
```

...or in your code
```js
methods: {
  alertSomething: function() {
    alert(this.$i('navbar.title'))
  }
}
```



<hr>



Change language in any component:<br>
From the template...
```html
<button @click="$setLang('eng')">
  <img src="static/eng.jpg">
</button>
```

...or in your code
```js
methods: {
  changeLanguage: function(language) {
    this.$setLang(language))
  }
}
```

(Notice the string _'eng'_ - $setLang should be called with the key of the language in the json file.)
