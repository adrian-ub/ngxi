import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLicenseOffIcon],svg[tabler-license-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 1 0 4 0v-2m0-4V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-.864.126M5.122 5.151A3 3 0 0 0 5 6v11m6-10h2m-4 4h2M3 3l18 18"></svg:path>`,
})
export class TablerLicenseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
