'use strict'

import './styl/all.styl'

export class App {

  constructor () {
    document.addEventListener('DOMContentLoaded', () => { this.init() })
  }

  init () {
    console.log('♥ =^.^= ♥')
  }
}

window.app = new App()
