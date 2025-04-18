import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextClockOutlineIcon],svg[mdi-invoice-text-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H7V7h10zm-2 4v3.69l3.19 1.84l.75-1.3l-2.44-1.41V13zm-6 9l1.87-1.24A6.95 6.95 0 0 0 16 23c3.87 0 7-3.13 7-7c0-1.91-.76-3.64-2-4.9V3H3v19l3-2zm0-2.4l-3-2l-1 .66V5h14v4.67c-.91-.43-1.93-.67-3-.67c-1.91 0-3.64.76-4.9 2H7v2h2.67c-.43.91-.67 1.93-.67 3c0 1.12.26 2.17.73 3.11zm7 1.4c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiInvoiceTextClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
