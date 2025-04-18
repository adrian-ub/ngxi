import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNeIcon],svg[circle-flags-ne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNe0)"><svg:path fill="#eee" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#ff9811" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#6da544" d="M0 367.3h512V512H0z"></svg:path><svg:circle cx="256" cy="256.1" r="89" fill="#ff9811"></svg:circle></svg:g>`,
})
export class CircleFlagsNeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
