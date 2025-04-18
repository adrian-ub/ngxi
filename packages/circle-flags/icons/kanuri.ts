import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsKanuriIcon],svg[circle-flags-kanuri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsKanuri0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsKanuri0)"><svg:path fill="#ffda44" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#496e2d" d="M0 345h512v167H0Z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v167H0Z"></svg:path><svg:path fill="#ffda44" d="m373 373l36 112l-94-69h117l-95 69z"></svg:path></svg:g>`,
})
export class CircleFlagsKanuriIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
