import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapPharmacyIcon],svg[map-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.352 17H10.4C5.23 17 1 20.64 1 25.5S5.23 34 10.4 34h28.952c5.168 0 9.398-3.641 9.398-8.5c0-4.86-4.23-8.5-9.398-8.5m.003 15H25V19h14.355c3.812 0 6.934 2.915 6.934 6.5S43.168 32 39.355 32"></svg:path>`,
})
export class MapPharmacyIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
