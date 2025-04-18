import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHotPriceIcon],svg[hugeicons-hot-price-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22a8 8 0 0 0 8-8c0-6-8-12-8-12c-.388 2.487-.768 3.822-2 6c-1.2-.555-1.5-1-2-2.25C6 8 4 11 4 14a8 8 0 0 0 8 8m-2-5l4-4m-4 0h.009m3.982 4H14" color="currentColor"></svg:path>`,
})
export class HugeiconsHotPriceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
