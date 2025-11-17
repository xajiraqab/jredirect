export default class BasePage {
  constructor(id) {
    this.pageElement = document.querySelector(`page#${id}`)
  }

  show() {
    if (!this.pageElement) {
      return
    }

    this.pageElement.style.display = "block"
    const autoFocusInput = this.pageElement.querySelector("input[autofocus]")
    if (autoFocusInput) {
      autoFocusInput.focus()
    }
  }

  hide() {
    if (this.pageElement) {
      this.pageElement.style.display = "none"
    }
  }
}
