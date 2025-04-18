import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeskIcon],svg[hugeicons-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8h18v4c0 2.357 0 3.536-.732 4.268C19.535 17 18.357 17 16 17H8c-2.357 0-3.536 0-4.268-.732S3 14.357 3 12zm4-2c0-1.886 0-2.828.586-3.414S9.114 2 11 2h2c1.886 0 2.828 0 3.414.586S17 4.114 17 6v2H7zM5 17v5m14-5v5M8 17v3m8-3v3M2 8h1.818m16.364 0H22" color="currentColor"></svg:path>`,
})
export class HugeiconsDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
