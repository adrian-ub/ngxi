import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCiIcon],svg[circle-flags-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCi0)"><svg:path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z"></svg:path><svg:path fill="#ff9811" d="M0 0h167v512H0z"></svg:path><svg:path fill="#6da544" d="M345 0h167v512H345z"></svg:path></svg:g>`,
})
export class CircleFlagsCiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
