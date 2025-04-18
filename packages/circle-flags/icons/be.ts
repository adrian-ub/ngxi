import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsBeIcon],svg[circle-flags-be-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsBe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsBe0)"><svg:path fill="#333" d="M0 0h167l38.2 252.6L167 512H0z"></svg:path><svg:path fill="#d80027" d="M345 0h167v512H345l-36.7-256z"></svg:path><svg:path fill="#ffda44" d="M167 0h178v512H167z"></svg:path></svg:g>`,
})
export class CircleFlagsBeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
