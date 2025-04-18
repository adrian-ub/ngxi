import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPkIcon],svg[circle-flags-pk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPk0)"><svg:path fill="#eee" d="M0 0h133.6l50.2 252.5L133.6 512H0z"></svg:path><svg:path fill="#496e2d" d="M133.6 0H512v512H133.6z"></svg:path><svg:path fill="#eee" d="M365.5 298.3A72.3 72.3 0 1 1 313.7 168a89 89 0 1 0 74.6 103.2a72 72 0 0 1-22.8 27.2zM364 167l18.2 19.6l24.3-11.3l-13 23.5l18.2 19.6l-26.3-5.1l-13 23.4l-3.3-26.7l-26.1-5l24.4-11.3z"></svg:path></svg:g>`,
})
export class CircleFlagsPkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
