import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEarScanIcon],svg[tabler-ear-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15a2 2 0 0 1-2 2c-.732 0-1.555-.247-1.72-.98c-.634-2.8-3.17-2.628-3.28-5.02v-.5a3.5 3.5 0 0 1 6.671-1.483M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2m-7-4v.01"></svg:path>`,
})
export class TablerEarScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
