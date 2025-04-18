import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesQrCodeScanOutlineIcon],svg[bubbles-qr-code-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 5.25h3v3h-3zm0 10.5h3v3h-3zm10.5-10.5h3v3h-3zm-10.5 7.5h6v1.5m3 0v4.5h4.5v-4.5h-1.5m-6 3v1.5m0-13.5v4.5h1.5m3 1.5h3M.75 6V2.25a1.5 1.5 0 0 1 1.5-1.5H6m12 0h3.75a1.5 1.5 0 0 1 1.5 1.5V6m0 12v3.75a1.5 1.5 0 0 1-1.5 1.5H18m-12 0H2.25a1.5 1.5 0 0 1-1.5-1.5V18"></svg:path>`,
})
export class BubblesQrCodeScanOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
