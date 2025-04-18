import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHotel01Icon],svg[hugeicons-hotel-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 4v16c0 .943 0 1.414.293 1.707S4.057 22 5 22h14c.943 0 1.414 0 1.707-.293S21 20.943 21 20V4M10.5 8v1.5m0 1.5V9.5m3-1.5v1.5m0 1.5V9.5m-3 0h3"></svg:path><svg:path d="M14 22v-4a2 2 0 1 0-4 0v4M2 4h6c.64-1.173 2.19-2 4-2s3.36.827 4 2h6M6 8h1m-1 4h1m-1 4h1m10-8h1m-1 4h1m-1 4h1"></svg:path></svg:g>`,
})
export class HugeiconsHotel01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
