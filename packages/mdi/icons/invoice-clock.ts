import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceClockIcon],svg[mdi-invoice-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13zm-6 9l1.87-1.24A6.95 6.95 0 0 0 16 23c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V3H3v19l3-2zm7-1c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiInvoiceClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
