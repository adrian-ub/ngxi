import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFingerprintScanIcon],svg[tabler-fingerprint-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 11a3 3 0 0 1 6 0c0 1.657.612 3.082 1 4"></svg:path><svg:path d="M12 11v1.75c-.001 1.11.661 2.206 1 3.25m-4-1.75c.068.58.358 1.186.5 1.75M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2"></svg:path></svg:g>`,
})
export class TablerFingerprintScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
