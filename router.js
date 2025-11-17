import PageCreateUrl from "./pages/pageCreateUrl.js"
import PageRedirecting from "./pages/pageRedirecting.js"
import PageShowResult from "./pages/pageShowResult.js"

export default class Router {
  constructor() {
    window.addEventListener("load", this.onMount)
  }

  PAGES = {
    pageCreateUrl: new PageCreateUrl("pageCreateUrl", () =>
      this.navigate(this.PAGES.pageShowResult)
    ),
    pageShowResult: new PageShowResult("pageShowResult", () =>
      this.navigate(this.PAGES.pageCreateUrl)
    ),
    pageRedirecting: new PageRedirecting("pageRedirecting"),
  }

  onMount = () => {
    if (!this.PAGES.pageRedirecting.checkForRedirect()) {
      this.navigate(this.PAGES.pageCreateUrl)
    } else {
      this.navigate(this.PAGES.pageRedirecting)
      this.PAGES.pageRedirecting.startRedirecting()
    }
  }

  hideAllPages() {
    for (const key in this.PAGES) {
      this.PAGES[key].hide()
    }
  }

  navigate(page) {
    this.hideAllPages()
    page.show()
  }
}
