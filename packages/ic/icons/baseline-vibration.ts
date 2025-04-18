import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineVibrationIcon],svg[ic-baseline-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h2V9H0zm3 2h2V7H3zm19-8v6h2V9zm-3 8h2V7h-2zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5M16 19H8V5h8z"></svg:path>`,
})
export class IcBaselineVibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
