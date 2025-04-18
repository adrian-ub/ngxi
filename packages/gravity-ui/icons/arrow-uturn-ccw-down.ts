import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCcwDownIcon],svg[gravity-ui-arrow-uturn-ccw-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.72 13.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L6 11.19V7a3.25 3.25 0 0 1 6.5 0v1A.75.75 0 0 0 14 8V7a4.75 4.75 0 1 0-9.5 0v4.19L2.78 9.47a.75.75 0 0 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCcwDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
