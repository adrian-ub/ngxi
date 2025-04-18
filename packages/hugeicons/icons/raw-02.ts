import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRaw02Icon],svg[hugeicons-raw-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.046 18l-.51-1.667M11.486 18l1.432-4.693c.055-.179.148-.307.348-.307s.294.128.348.307l.924 3.026M7 18v-2m0 0v-2c0-.732.055-1 .712-1H8.78c.59 0 1.068.672 1.068 1.5S9.37 16 8.78 16M7 16h1.78m0 0l.712 2M12 16.333h2.538M21 13l-.363 4.166c-.03.353-.046.53-.16.563c-.113.033-.23-.106-.462-.383l-.928-1.104c-.126-.15-.189-.225-.273-.225s-.147.075-.273.225l-.928 1.105c-.232.277-.348.415-.462.382c-.113-.033-.129-.21-.16-.562L16.625 13"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsRaw02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
