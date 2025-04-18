import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerSettingsIcon],svg[mdi-power-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 24h2v-2h-2m1.56-17.56l-1.45 1.45A5.97 5.97 0 0 1 18 11a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.96 7.96 0 0 0 4 11a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 2h-2v10h2m-2 12h2v-2h-2m-4 2h2v-2H7z"></svg:path>`,
})
export class MdiPowerSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
