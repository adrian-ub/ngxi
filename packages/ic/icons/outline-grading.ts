import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineGradingIcon],svg[ic-outline-grading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h16v2H4zm0 6h16v-2H4zm0 4h7v-2H4zm0 4h7v-2H4zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21L20 16.42L18.58 15zM4 3v2h16V3z"></svg:path>`,
})
export class IcOutlineGradingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
