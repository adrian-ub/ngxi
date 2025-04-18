import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBorderTop01Icon],svg[hugeicons-border-top-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.5 6.5c-.198-1.094-.55-1.899-1.17-2.536C18.9 2.5 16.6 2.5 12 2.5s-6.9 0-8.33 1.464C3.05 4.601 2.7 5.406 2.5 6.5m18.749 11.19c-.194 1.042-.536 1.809-1.14 2.415c-.605.606-1.37.95-2.409 1.143M21.495 10c.005.586.005 1.288.005 1.974s0 1.45-.005 2.037M13.9 21.495q-.875.006-1.9.005q-1.025.001-1.9-.005m-3.8-.247c-1.04-.194-1.804-.537-2.409-1.143s-.946-1.373-1.14-2.415M2.505 10c-.005.586-.005 1.288-.005 1.974s0 1.45.005 2.037M21.5 12H20M4 12H2.5M12 9v6m0 4.531V21m3-9H9" color="currentColor"></svg:path>`,
})
export class HugeiconsBorderTop01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
