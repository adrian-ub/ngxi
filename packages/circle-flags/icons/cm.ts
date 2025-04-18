import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCmIcon],svg[circle-flags-cm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCm0)"><svg:path fill="#d80027" d="M144.8 0h222.4l32 260l-32 252H144.8l-32.1-256z"></svg:path><svg:path fill="#ffda44" d="m256.1 167l22.1 68h71.5L292 277l22 68l-57.8-42l-57.9 42l22.1-68l-57.8-42H234z"></svg:path><svg:path fill="#496e2d" d="M0 0h144.8v512H0z"></svg:path><svg:path fill="#ffda44" d="M367.2 0H512v512H367.2z"></svg:path></svg:g>`,
})
export class CircleFlagsCmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
