import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePrinterIcon],svg[mage-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.625 14.313h-9.25c-.639 0-1.156.517-1.156 1.156v4.625c0 .638.517 1.156 1.156 1.156h9.25c.639 0 1.156-.518 1.156-1.156v-4.625c0-.639-.517-1.156-1.156-1.156"></svg:path><svg:path d="M17.781 17.781h2.313a1.156 1.156 0 0 0 1.156-1.156v-5.781a2.31 2.31 0 0 0-2.312-2.313H5.063a2.31 2.31 0 0 0-2.313 2.313v5.781a1.156 1.156 0 0 0 1.156 1.156H6.22"></svg:path><svg:path d="M16.625 8.531V3.906a1.156 1.156 0 0 0-1.156-1.156H8.53a1.156 1.156 0 0 0-1.156 1.156v4.625"></svg:path></svg:g>`,
})
export class MagePrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
