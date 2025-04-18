import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIcIcon],svg[circle-flags-ic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsIc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsIc0)"><svg:path fill="#338af3" d="M167 0h178l32.3 257L345 512H167l-25.3-256z"></svg:path><svg:path fill="#eee" d="M0 0h166.9v512H0z"></svg:path><svg:path fill="#ffda44" d="M344.9 0H512v512H344.9z"></svg:path></svg:g>`,
})
export class CircleFlagsIcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
