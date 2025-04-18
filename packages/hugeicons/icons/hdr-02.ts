import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHdr02Icon],svg[hugeicons-hdr-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 18v-2.5m0 0V13m0 2.5h2.884m0-2.5v2.5m0 0V18m7.655 0v-2m0 0v-2c0-.732.067-1 .865-1h1.298c.717 0 1.298.672 1.298 1.5s-.581 1.5-1.298 1.5m-2.163 0h2.163m0 0l.897 2m-5.112-2.5c0 1.38-1.106 2.5-2.471 2.5c-.308 0-.462 0-.577-.067c-.274-.16-.247-.485-.247-.766v-3.334c0-.281-.027-.606.247-.766c.115-.067.269-.067.577-.067c1.365 0 2.471 1.12 2.471 2.5"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsHdr02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
