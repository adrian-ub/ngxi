import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInvoiceIcon],svg[tabler-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M19 12v7a1.78 1.78 0 0 1-3.1 1.4a1.65 1.65 0 0 0-2.6 0a1.65 1.65 0 0 1-2.6 0a1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 19V5a2 2 0 0 1 2-2h7l5 5v4.25"></svg:path></svg:g>`,
})
export class TablerInvoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
