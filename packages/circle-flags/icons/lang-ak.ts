import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangAkIcon],svg[circle-flags-lang-ak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangAk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangAk0)"><svg:path fill="#ffda44" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v167H0Z"></svg:path><svg:path fill="#496e2d" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#333" d="m198 345l151-109H163l151 109l-58-178Z"></svg:path></svg:g>`,
})
export class CircleFlagsLangAkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
