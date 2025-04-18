import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsScanFingerprintLineIcon],svg[majesticons-scan-fingerprint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19v-8m-3 7v-7c0-1 .6-3 3-3s3 2 3 3v6m-9-3v-3c0-2 1.2-6 6-6s6 4 6 6m0 4v-1M6.001 17H6M7 3H5a2 2 0 0 0-2 2v2m0 10v2a2 2 0 0 0 2 2h2m10 0h2a2 2 0 0 0 2-2v-2m0-10V5a2 2 0 0 0-2-2h-2"></svg:path>`,
})
export class MajesticonsScanFingerprintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
