import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsErIcon],svg[circle-flags-er-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEr0)"><svg:path fill="#6da544" d="M0 0h512v256H62z"></svg:path><svg:path fill="#338af3" d="M62 256h450v256H0z"></svg:path><svg:path fill="#d80027" d="M0 0v512l512-256z"></svg:path><svg:path fill="#ffda44" d="M133.6 150.3c-49.1 0-89 40-89 89v33.4a89.1 89.1 0 0 0 178 0v-33.4c0-49-40-89-89-89m55.6 122.4c0 24.9-16.4 46-39 53v-36.3l23.7-23.6l-23.6-23.6v-19.6h-33.4V256l-23.6 23.6l23.6 23.6v22.6a55.7 55.7 0 0 1-39-53.1v-33.4a55.7 55.7 0 0 1 111.3 0z"></svg:path></svg:g>`,
})
export class CircleFlagsErIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
