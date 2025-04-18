import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUaIcon],svg[circle-flags-ua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUa0)"><svg:path fill="#ffda44" d="m0 256l258-39.4L512 256v256H0z"></svg:path><svg:path fill="#338af3" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsUaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
