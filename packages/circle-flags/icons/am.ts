import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAmIcon],svg[circle-flags-am-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAm0)"><svg:path fill="#0052b4" d="m0 166.9l253-26.7L512 167v178l-261.1 26L0 344.8z"></svg:path><svg:path fill="#d80027" d="M0 0h512v166.9H0z"></svg:path><svg:path fill="#ff9811" d="M0 344.9h512V512H0z"></svg:path></svg:g>`,
})
export class CircleFlagsAmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
