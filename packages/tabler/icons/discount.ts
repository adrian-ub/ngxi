import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiscountIcon],svg[tabler-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 15l6-6"></svg:path><svg:circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></svg:circle><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path></svg:g>`,
})
export class TablerDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
