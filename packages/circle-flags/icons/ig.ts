import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIgIcon],svg[circle-flags-ig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsIg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsIg0)"><svg:path fill="#6da544" d="M0 0v512h160l96-64l96 64h160V0H352l-96 64l-96-64Z"></svg:path><svg:path fill="#eee" d="M160 0h192v512H160Z"></svg:path></svg:g>`,
})
export class CircleFlagsIgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
