import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEcWIcon],svg[circle-flags-ec-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEcW0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEcW0)"><svg:path fill="#eee" d="m0 167l254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"></svg:path><svg:path fill="#6da544" d="M0 0h512v166.9H0z"></svg:path><svg:path fill="#0052b4" d="M0 344.9h512V512H0z"></svg:path></svg:g>`,
})
export class CircleFlagsEcWIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
