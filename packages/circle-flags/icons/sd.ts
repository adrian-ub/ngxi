import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSdIcon],svg[circle-flags-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSd0)"><svg:path fill="#eee" d="M43.6 109.4L512 144.7v222.6L43.8 397.2z"></svg:path><svg:path fill="#d80027" d="M0 0h512v144.7H111z"></svg:path><svg:path fill="#333" d="M111 367.3h401V512H0z"></svg:path><svg:path fill="#496e2d" d="M0 0v512l256-256z"></svg:path></svg:g>`,
})
export class CircleFlagsSdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
