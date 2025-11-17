import BasePage from "./basePage.js"

export default class PageRedirecting extends BasePage {
  constructor(id) {
    super(id)
    this.ui.btnStopRedirecting.addEventListener("click", this.stopRedirecting)
  }

  ui = {
    lblRedirectTimer: document.querySelector("p#lblRedirectTimer"),
    lblRedirectTitle: document.querySelector("span#lblRedirectTitle"),
    linkRedirectingTo: document.querySelector("a#linkRedirectingTo"),
    btnStopRedirecting: document.querySelector("button#btnStopRedirecting"),
  }

  redirectTo = ""
  listTime = ["5️⃣", "4️⃣", " 3️⃣", "2️⃣", "1️⃣"]

  checkForRedirect() {
    const params = new URLSearchParams(window.location.search)
    let redirectTo = params.get("r")
    if (!redirectTo) {
      return false
    }

    return true
  }

  stopRedirecting = () => {
    clearInterval(this.interval)
    this.ui.lblRedirectTitle.innerHTML = "The redirect has been stopped:"
    this.ui.btnStopRedirecting.style.display = "none"
    this.ui.lblRedirectTimer.style.display = "none"
  }

  startRedirecting() {
    const params = new URLSearchParams(window.location.search)
    this.redirectTo = params.get("r")
    if (!this.redirectTo) {
      return
    }

    this.ui.lblRedirectTitle.innerHTML = `Redirecting to:`
    this.ui.linkRedirectingTo.innerHTML = this.redirectTo
    this.ui.linkRedirectingTo.setAttribute("href", this.redirectTo)

    let decodedUrl = decodeURIComponent(this.redirectTo)
    if (
      !decodedUrl.startsWith("http://") &&
      !decodedUrl.startsWith("https://")
    ) {
      decodedUrl = "https://" + decodedUrl
    }

    this.redirectTo = decodedUrl

    let currentIndex = 0
    this.ui.lblRedirectTimer.innerHTML = this.listTime[currentIndex++]

    this.interval = setInterval(() => {
      if (currentIndex == this.listTime.length) {
        // window.location.assign(this.redirectTo)
        clearInterval(this.interval)
        return
      }

      this.ui.lblRedirectTimer.innerHTML = this.listTime[currentIndex++]
    }, 1000)
  }
}
