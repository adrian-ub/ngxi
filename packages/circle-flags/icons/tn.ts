import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTnIcon],svg[circle-flags-tn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTn0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="122.4" fill="#eee"></svg:circle><svg:g fill="#d80027"><svg:path d="m271 209.2l21 29l34.1-11.1l-21 29l21 28.9l-34-11.1l-21 29V267L237 256l34-11z"></svg:path><svg:path d="M283.8 328.3a72.3 72.3 0 1 1 34.4-136a89 89 0 1 0 0 127.3a72 72 0 0 1-34.4 8.7"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsTnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
