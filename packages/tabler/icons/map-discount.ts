import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapDiscountIcon],svg[tabler-map-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19l-4-2l-6 3V7l6-3l6 3l6-3v8.5M9 4v13m6-10v5.5m1 8.5l5-5m0 5v.01M16 16v.01"></svg:path>`,
})
export class TablerMapDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
