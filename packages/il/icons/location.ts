import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilLocationIcon],svg[il-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M671 220q7 3 12 8t5 13t-3 13t-11 9L396 389q-8 5-11 12L259 678q-3 8-9 11t-14 3t-12-4t-9-12L2 36q-5-14 6-24t24-5z"></svg:path>`,
})
export class IlLocationIcon {
  readonly viewBox = input("0 0 690 820")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
