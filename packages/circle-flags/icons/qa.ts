import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsQaIcon],svg[circle-flags-qa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsQa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsQa0)"><svg:path fill="#eee" d="M0 0h173l61 255.8L173.4 512H0z"></svg:path><svg:path fill="#751a46" d="m173 0l-72.7 30.8L176 63l-75.7 32.2l75.7 32.1l-75.7 32.2l75.7 32.1l-75.7 32.1l75.7 32.2l-75.7 32.2l75.7 32.1l-75.7 32.2l75.7 32.1l-75.7 32.2l75.7 32.1l-75.7 32.2l73.1 31H512V0z"></svg:path></svg:g>`,
})
export class CircleFlagsQaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
