import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAngleUpIcon],svg[fa-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23"></svg:path>`,
})
export class FaAngleUpIcon {
  readonly viewBox = input("0 0 1024 1280")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
