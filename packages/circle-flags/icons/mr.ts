import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMrIcon],svg[circle-flags-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMr0)"><svg:path fill="#496e2d" d="M0 0h512v512H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="M256 295.8a89 89 0 0 1-87-70a89.4 89.4 0 0 0-2 19a89 89 0 1 0 178 0a89.4 89.4 0 0 0-2-19a89 89 0 0 1-87 70"></svg:path><svg:path d="m256 178l8.3 25.6H291l-21.7 15.8l8.3 25.5L256 229l-21.7 15.8l8.3-25.5l-21.7-15.8h26.8z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsMrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
