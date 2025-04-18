import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageDownloadIcon],svg[hugeicons-image-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 21c4.21-4.751 8.941-11.052 16-6.327"></svg:path><svg:path d="M14 3.002C13.53 3 12.03 3 11.5 3C7.022 3 4.782 3 3.391 4.391S2 8.021 2 12.5c0 4.478 0 6.718 1.391 8.109S7.021 22 11.5 22c4.478 0 6.718 0 8.109-1.391c1.338-1.339 1.389-3.462 1.39-7.609"></svg:path><svg:path d="M17 7.5c.491.506 1.8 2.5 2.5 2.5M22 7.5c-.491.506-1.8 2.5-2.5 2.5m0 0V2"></svg:path></svg:g>`,
})
export class HugeiconsImageDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
