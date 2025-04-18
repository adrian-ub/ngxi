import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangPsIcon],svg[circle-flags-lang-ps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangPs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangPs0)"><svg:path fill="#d80027" d="M144.7 0h222.6l37 257.7l-37 254.3H144.7l-42.4-255.2z"></svg:path><svg:path fill="#496e2d" d="M367.3 0H512v512H367.3z"></svg:path><svg:path fill="#333" d="M0 0h144.7v512H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M256 167a89 89 0 1 0 0 178a89 89 0 0 0 0-178m0 144.7a55.7 55.7 0 1 1 0-111.4a55.7 55.7 0 0 1 0 111.4"></svg:path><svg:path d="M256 222.6c-12.3 0-22.3 10-22.3 22.3v33.4h44.6v-33.4c0-12.3-10-22.3-22.3-22.3"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsLangPsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
