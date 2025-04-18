import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEweIcon],svg[circle-flags-ewe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEwe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEwe0)"><svg:path fill="#d80027" d="m0 167l256-32l256 32v178l-256 32L0 345Z"></svg:path><svg:path fill="#6da544" d="M0 0h512v167H0zm0 345h512v167H0z"></svg:path><svg:path fill="#ffda44" d="m110 200l36 112l-95-69h117l-94 69zm146 0l36 112l-94-69h117l-95 69zm146 0l36 112l-94-69h117l-95 69z"></svg:path></svg:g>`,
})
export class CircleFlagsEweIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
