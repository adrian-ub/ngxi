import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFingerprintIcon],svg[picon-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6C1 0 7 1 7 5H6c0-3-4-3-3 1m3 2V6h1v2M0 4c-1-5 8-5 8-2H7c0-2-7-2-6 2m0 1c0 3 4 3 3-1h1c1 5-5 5-5 1"></svg:path>`,
})
export class PiconFingerprintIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
