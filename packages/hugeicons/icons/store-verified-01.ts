import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStoreVerified01Icon],svg[hugeicons-store-verified-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.971 7.5s.5 0 1 1c0 0 1.589-2.5 3-3m.025 9.542l.028 4.55A2.503 2.503 0 0 1 16.52 22H5.393a2.503 2.503 0 0 1-2.507-2.499l.086-6.466m6.01-7.022l-3.834-.064a2.005 2.005 0 0 0-1.959 1.389l-1.097 3.416c-.13.404-.139.845.077 1.211c.785 1.334 2.895 3.154 6.248 1.198m-.971-1.83c.39 1.268 1.92 3.493 5.04 2.204"></svg:path><svg:path d="M22 7.016a5.01 5.01 0 0 1-5.007 5.016a5.01 5.01 0 0 1-5.007-5.016A5.01 5.01 0 0 1 16.993 2A5.01 5.01 0 0 1 22 7.016"></svg:path></svg:g>`,
})
export class HugeiconsStoreVerified01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
