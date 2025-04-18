import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeftToRightListNumberIcon],svg[hugeicons-left-to-right-list-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 6h10m-10 6h10m-10 6h10M3 15h1.5c.279 0 .418 0 .534.023a1.2 1.2 0 0 1 .943.943C6 16.082 6 16.22 6 16.5s0 .418-.023.534a1.2 1.2 0 0 1-.943.943C4.918 18 4.78 18 4.5 18s-.418 0-.534.023a1.2 1.2 0 0 0-.943.943C3 19.082 3 19.22 3 19.5v.9c0 .283 0 .424.088.512s.23.088.512.088H6M3 3h1.2a.3.3 0 0 1 .3.3V9m0 0H3m1.5 0H6" color="currentColor"></svg:path>`,
})
export class HugeiconsLeftToRightListNumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
