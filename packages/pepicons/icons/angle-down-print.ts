import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsAngleDownPrintIcon],svg[pepicons-angle-down-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m12 11.547l-5.04-4.2c-1.536-1.28-3.457 1.025-1.92 2.305l5.948 4.957c.272.256.63.42 1.012.418c.382.002.74-.162 1.012-.418l5.948-4.957c1.537-1.28-.384-3.585-1.92-2.304l-5.04 4.2Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path d="m15.68 7.116l-6 5l.64.768l6-5l-.64-.768Z"></svg:path><svg:path d="m16.32 7.884l-6 5c-.512.427-1.152-.341-.64-.768l6-5c.512-.427 1.152.341.64.768Z"></svg:path><svg:path d="m3.68 7.884l6 5l.64-.768l-6-5l-.64.768Z"></svg:path><svg:path d="m4.32 7.116l6 5c.512.427-.128 1.195-.64.768l-6-5c-.512-.427.128-1.195.64-.768Z"></svg:path></svg:g>`,
})
export class PepiconsAngleDownPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
