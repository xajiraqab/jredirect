import BasePage from "./basePage.js"

export default class PageCreateUrl extends BasePage {
  constructor(id, on_success) {
    super(id)
    this.onSuccess = on_success
    // this.onSubmit = this.onSubmit.bind(this) // bind `this` so it refers to the class instance
    this.ui.form.addEventListener("submit", this.onSubmit)
  }

  ui = {
    txtUrl: document.querySelector("input[name=url]"),
    btnCopy: document.querySelector("button#btnCopy"),
    form: document.querySelector("form"),
    txtResult: document.querySelector("input#txtResult"),
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.onSuccess()
  }
}
