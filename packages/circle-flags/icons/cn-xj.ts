import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCnXjIcon],svg[circle-flags-cn-xj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCnXj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCnXj0)"><svg:path fill="#338af3" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#eee" d="m312 256l116-38l-72 99V195l72 99zm8 69a128 128 0 1 1 0-137a102 102 0 1 0 0 137"></svg:path></svg:g>`,
})
export class CircleFlagsCnXjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
