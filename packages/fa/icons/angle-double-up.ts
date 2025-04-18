import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAngleDoubleUpIcon],svg[fa-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 1056q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 736l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23m0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 352L119 745q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23"></svg:path>`,
})
export class FaAngleDoubleUpIcon {
  readonly viewBox = input("0 0 1024 1280")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
