import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineGavelIcon],svg[ic-baseline-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.25 8.069l2.83-2.827l14.134 14.15l-2.83 2.827zm4.236-4.242L12.314.998l5.657 5.656l-2.828 2.83zM.999 12.315l2.828-2.829l5.657 5.657l-2.828 2.828zM1 21h12v2H1z"></svg:path>`,
})
export class IcBaselineGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
