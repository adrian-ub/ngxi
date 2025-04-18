import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAngleDownIcon],svg[fa-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 480q0 13-10 23L535 969q-10 10-23 10t-23-10L23 503q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393l393-393q10-10 23-10t23 10l50 50q10 10 10 23"></svg:path>`,
})
export class FaAngleDownIcon {
  readonly viewBox = input("0 0 1024 1280")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
