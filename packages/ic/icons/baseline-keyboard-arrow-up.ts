import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineKeyboardArrowUpIcon],svg[ic-baseline-keyboard-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"></svg:path>`,
})
export class IcBaselineKeyboardArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
