import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineNearMeDisabledIcon],svg[ic-baseline-near-me-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.34L21 3l-3.34 9zm10.61 13.44L4.22 1.39L2.81 2.81l5.07 5.07L3 9.69v1.41l7.07 2.83L12.9 21h1.41l1.81-4.88l5.07 5.07z"></svg:path>`,
})
export class IcBaselineNearMeDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
