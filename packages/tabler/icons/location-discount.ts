import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLocationDiscountIcon],svg[tabler-location-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.797 19.595L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.548 9.826M16 21l5-5m0 5v.01M16 16v.01"></svg:path>`,
})
export class TablerLocationDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
