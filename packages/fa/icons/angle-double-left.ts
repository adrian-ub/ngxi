import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAngleDoubleLeftIcon],svg[fa-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M595 1120q0 13-10 23l-50 50q-10 10-23 10t-23-10L23 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L192 704l393 393q10 10 10 23m384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10L407 727q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L576 704l393 393q10 10 10 23"></svg:path>`,
})
export class FaAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 992 1280")
  readonly width = input("0.78em")
  readonly height = input("1em")
}
