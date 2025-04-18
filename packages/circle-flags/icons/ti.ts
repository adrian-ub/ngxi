import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTiIcon],svg[circle-flags-ti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTi0)"><svg:path fill="#d80027" d="M0 0h512v512H0l64-256Z"></svg:path><svg:path fill="#ffda44" d="M0 0v512l256-256Zm404 168v176L300 202l168 54l-168 54Z"></svg:path></svg:g>`,
})
export class CircleFlagsTiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
