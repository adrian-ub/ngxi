import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDesktopAccessDisabledIcon],svg[ic-baseline-desktop-access-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16c0 1.1-.9 2-2 2h-1l-2-2h3V4H6L4 2h17c1.1 0 2 .9 2 2zm-5.5 2l-2-2zm-2.6 0l6 6l1.3-1.3l-4.7-4.7l-2-2L1.2 1.8L0 3.1l1 1V16c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2zM3 16V6.1l9.9 9.9z"></svg:path>`,
})
export class IcBaselineDesktopAccessDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
