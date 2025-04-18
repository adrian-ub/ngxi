import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceFastIcon],svg[mdi-invoice-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5H7v16l2.5-1.68L12 21l2.5-1.68L17 21l2.5-1.68L22 21zM2 8c0-.6.4-1 1-1h2v2H3c-.6 0-1-.4-1-1m-1 4c0-.6.4-1 1-1h3v2H2c-.6 0-1-.4-1-1m-1 4c0-.6.4-1 1-1h4v2H1c-.6 0-1-.4-1-1"></svg:path>`,
})
export class MdiInvoiceFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
