import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDocScannerIcon],svg[arcticons-doc-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M5.5 31h37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 22.873v-9.246h2.08a4.045 4.045 0 0 1 4.046 4.045v1.156a4.045 4.045 0 0 1-4.046 4.045zm23-3.101v.038a3.063 3.063 0 0 1-3.063 3.063h0a3.063 3.063 0 0 1-3.063-3.063v-3.12a3.063 3.063 0 0 1 3.063-3.063h0A3.063 3.063 0 0 1 35.5 16.69v.038M20.937 19.81a3.063 3.063 0 0 0 6.126 0v-3.12a3.063 3.063 0 0 0-6.126 0z"></svg:path>`,
})
export class ArcticonsDocScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
