import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunglassesIcon],svg[hugeicons-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 16c.836.628 1.874 1 3 1a4.98 4.98 0 0 0 3-1m-3.5-6.5C9 8 6 8 4 8c0 0 0 5 3 5c2.5 0 4.5-3.5 4.5-3.5m1 0C15 8 18 8 20 8c0 0 0 5-3 5c-2.5 0-4.5-3.5-4.5-3.5"></svg:path></svg:g>`,
})
export class HugeiconsSunglassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
