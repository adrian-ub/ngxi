import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsDeIcon],svg[circle-flags-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsDe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsDe0)"><svg:path fill="#ffda44" d="m0 345l256.7-25.5L512 345v167H0z"></svg:path><svg:path fill="#d80027" d="m0 167l255-23l257 23v178H0z"></svg:path><svg:path fill="#333" d="M0 0h512v167H0z"></svg:path></svg:g>`,
})
export class CircleFlagsDeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
