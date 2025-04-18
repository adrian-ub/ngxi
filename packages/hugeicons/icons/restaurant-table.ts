import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurantTableIcon],svg[hugeicons-restaurant-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 17c-1.5 0-1.5-1-3-1l1.171-4.099c.4-1.396.599-2.094 1.133-2.498C5.84 9 6.565 9 8.017 9h7.966c1.452 0 2.178 0 2.713.403c.534.404.734 1.102 1.133 2.498L21 16c-1.5 0-1.5 1-3 1s-1.5-1-3-1s-1.5 1-3 1s-1.5-1-3-1s-1.5 1-3 1m2-8V8a4 4 0 0 1 4-4m4 5V8a4 4 0 0 0-4-4m0 0V3m0 14v4m0 0h2m-2 0h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurantTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
