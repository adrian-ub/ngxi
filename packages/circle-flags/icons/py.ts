import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPyIcon],svg[circle-flags-py-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPy0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPy0)"><svg:path fill="#eee" d="m0 144.7l255.3-36.5L512 144.7v222.6L250.5 407L0 367.3z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H0z"></svg:path><svg:path fill="#0052b4" d="M0 367.3h512V512H0z"></svg:path><svg:path fill="#6da544" d="m319 182l-23.6 23.5a55.5 55.5 0 0 1-39.4 95a55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0"></svg:path><svg:path fill="#ffda44" d="m256 211.5l8.3 25.5H291l-21.7 15.8l8.3 25.5l-21.7-15.8l-21.7 15.8l8.3-25.5l-21.7-15.8h26.8z"></svg:path></svg:g>`,
})
export class CircleFlagsPyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
