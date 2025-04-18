import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangNrIcon],svg[circle-flags-lang-nr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangNr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangNr0)"><svg:path fill="#eee" d="m0 0l192 256L0 512h47l465-189v-34l-32-33l32-33v-34L47 0Z"></svg:path><svg:path fill="#333" d="M0 142v228l140-114z"></svg:path><svg:path fill="#ffda44" d="M192 256L0 95v47l114 114L0 370v47z"></svg:path><svg:path fill="#6da544" d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"></svg:path><svg:path fill="#d80027" d="M512 0H47l189 189h276z"></svg:path><svg:path fill="#0052b4" d="M512 512H47l189-189h276z"></svg:path></svg:g>`,
})
export class CircleFlagsLangNrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
