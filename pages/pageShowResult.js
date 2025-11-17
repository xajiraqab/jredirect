import BasePage from "./basePage.js"

export default class PageShowResult extends BasePage {
  constructor(id, go_back) {
    super(id)
    this.ui.btnCopy.addEventListener("click", this.copyResult)
    this.ui.btnBack.addEventListener("click", () => go_back())
  }

  ui = {
    txtResult: document.querySelector("input#txtResult"),
    txtUrl: document.querySelector("input[name=url]"),
    btnCopy: document.querySelector("button#btnCopy"),
    btnBack: document.querySelector("button#btnBack"),
  }

  show() {
    super.show()
    const encodedUrl =
      `https://xajiraqab.github.io/jredirect?r=` +
      encodeURIComponent(this.ui.txtUrl.value)
    this.ui.txtResult.value = encodedUrl
    this.ui.txtResult.select()
  }

  copyResult = () => {
    console.log(this.ui.txtResult)
    this.ui.txtResult.select() // highlight text
    this.ui.txtResult.setSelectionRange(0, 99999) // for mobile
    navigator.clipboard.writeText(this.ui.txtResult.value)

    this.ui.btnCopy.innerHTML = "✅ Copied"
    this.ui.btnCopy.classList.add("disabled")
    setTimeout(() => {
      this.ui.btnCopy.innerHTML = "Copy"
      this.ui.btnCopy.classList.remove("disabled")
    }, 3000)
  }
}
