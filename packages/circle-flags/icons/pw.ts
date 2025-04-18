import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPwIcon],svg[circle-flags-pw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPw0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:circle cx="200.3" cy="256" r="111.3" fill="#ffda44"></svg:circle></svg:g>`,
})
export class CircleFlagsPwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
