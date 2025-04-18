import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePrinterIcon],svg[icomoon-free-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h8v2H4zm11 3H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h3v4h8v-4h3c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1M2 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m9 7H5V9h6z"></svg:path>`,
})
export class IcomoonFreePrinterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
