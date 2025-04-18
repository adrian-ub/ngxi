import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquaresearchIcon],svg[whh-squaresearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-76-261l-110-110q58-77 58-173q0-119-84.5-203.5t-203.5-84.5t-203.5 84.5t-84.5 203.5t84.5 203.5t203.5 84.5q96 0 173-58l110 110q12 12 28.5 12t28.5-12t12-28.5t-12-28.5m-340-59q-93 0-158.5-65.5t-65.5-158.5t65.5-158.5t158.5-65.5t158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5"></svg:path>`,
})
export class WhhSquaresearchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
