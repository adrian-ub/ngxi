import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSettingsPowerIcon],svg[ic-baseline-settings-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 24h2v-2H7zm4 0h2v-2h-2zm2-22h-2v10h2zm3.56 2.44l-1.45 1.45A5.97 5.97 0 0 1 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.96 7.96 0 0 0 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56M15 24h2v-2h-2z"></svg:path>`,
})
export class IcBaselineSettingsPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
