import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftListNumberIcon],svg[hugeicons-right-to-left-list-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h10M3 12h10M3 18h10m5-3h1.5c.279 0 .418 0 .534.023a1.2 1.2 0 0 1 .943.943c.023.116.023.255.023.534s0 .418-.023.534a1.2 1.2 0 0 1-.943.943C19.918 18 19.78 18 19.5 18s-.418 0-.534.023a1.2 1.2 0 0 0-.943.943C18 19.082 18 19.22 18 19.5v.9c0 .283 0 .424.088.512s.23.088.512.088H21M18 3h1.2a.3.3 0 0 1 .3.3V9m0 0H18m1.5 0H21" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftListNumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
