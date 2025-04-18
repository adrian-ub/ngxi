import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineKeyboardDoubleArrowDownIcon],svg[ic-baseline-keyboard-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"></svg:path><svg:path fill="currentColor" d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"></svg:path>`,
})
export class IcBaselineKeyboardDoubleArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
