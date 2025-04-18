import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMlIcon],svg[circle-flags-ml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMl0)"><svg:path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"></svg:path><svg:path fill="#6da544" d="M0 0h167v512H0z"></svg:path><svg:path fill="#d80027" d="M345 0h167v512H345z"></svg:path></svg:g>`,
})
export class CircleFlagsMlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
