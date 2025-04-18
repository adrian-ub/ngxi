import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextFastIcon],svg[mdi-invoice-text-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h15v16l-2.5-1.68L17 21l-2.5-1.68L12 21l-2.5-1.68L7 21zm11 4h-7v2h7zm-7 4v2h5v-2zM3 7c-.6 0-1 .4-1 1s.4 1 1 1h2V7zm-2 5c0-.6.4-1 1-1h3v2H2c-.6 0-1-.4-1-1m0 3c-.6 0-1 .4-1 1s.4 1 1 1h4v-2z"></svg:path>`,
})
export class MdiInvoiceTextFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
