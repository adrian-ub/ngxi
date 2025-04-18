import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsJaIcon],svg[circle-flags-ja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsJa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsJa0)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="111.3" fill="#d80027"></svg:circle></svg:g>`,
})
export class CircleFlagsJaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
