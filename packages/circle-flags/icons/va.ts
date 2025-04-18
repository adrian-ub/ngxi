import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVaIcon],svg[circle-flags-va-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVa0)"><svg:path fill="#ffda44" d="M0 0h256l51.7 254.7L256 512H0z"></svg:path><svg:path fill="#eee" d="M256 0h256v512H256z"></svg:path><svg:path fill="#acabb1" d="m354 222.8l48.1 63.6A33.4 33.4 0 1 0 420 273l-75-99.2l-17.7 13.4l-26.7 20.2l26.9 35.5l26.6-20.1zm69.3 73.1a11.1 11.1 0 1 1 13.4 17.8a11.1 11.1 0 0 1-13.4-17.8"></svg:path><svg:path fill="#ffda44" d="m436.6 242.9l26.8-35.5l-26.6-20.2l-17.8-13.4l-75 99.2a33.4 33.4 0 1 0 17.8 13.4l48-63.6l26.8 20zm-93.8 68.6a11.1 11.1 0 1 1-17.8-13.4a11.1 11.1 0 0 1 17.8 13.4"></svg:path></svg:g>`,
})
export class CircleFlagsVaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
