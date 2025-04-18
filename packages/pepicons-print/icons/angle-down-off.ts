import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintAngleDownOffIcon],svg[pepicons-print-angle-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m12 11.548l-5.04-4.2c-1.536-1.28-3.457 1.024-1.92 2.304l5.948 4.957c.272.256.63.42 1.012.418c.382.002.74-.162 1.012-.418l5.948-4.957c1.537-1.28-.384-3.585-1.92-2.304z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path d="m15.68 7.116l-6 5l.64.768l6-5z"></svg:path><svg:path d="m16.32 7.884l-6 5c-.512.427-1.152-.341-.64-.768l6-5c.512-.427 1.152.341.64.768"></svg:path><svg:path d="m3.68 7.884l6 5l.64-.768l-6-5z"></svg:path><svg:path d="m4.32 7.116l6 5c.512.427-.128 1.195-.64.768l-6-5c-.512-.427.128-1.195.64-.768M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintAngleDownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
