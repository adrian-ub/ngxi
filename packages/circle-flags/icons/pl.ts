import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPlIcon],svg[circle-flags-pl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPl0)"><svg:path fill="#d80027" d="m0 256l256.4-44.3L512 256v256H0z"></svg:path><svg:path fill="#eee" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsPlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
