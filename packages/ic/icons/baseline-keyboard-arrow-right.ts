import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineKeyboardArrowRightIcon],svg[ic-baseline-keyboard-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"></svg:path>`,
})
export class IcBaselineKeyboardArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
