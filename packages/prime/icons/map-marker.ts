import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeMapMarkerIcon],svg[prime-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.25a.7.7 0 0 1-.41-.13c-.3-.19-7.34-4.92-7.34-10.67a7.75 7.75 0 0 1 15.5 0c0 5.75-7 10.48-7.34 10.67a.7.7 0 0 1-.41.13m0-17a6.23 6.23 0 0 0-6.25 6.2c0 4.21 4.79 8.06 6.25 9.13c1.46-1.07 6.25-4.92 6.25-9.13A6.23 6.23 0 0 0 12 4.25"></svg:path><svg:path fill="currentColor" d="M12 12.75A2.75 2.75 0 1 1 14.75 10A2.75 2.75 0 0 1 12 12.75m0-4A1.25 1.25 0 1 0 13.25 10A1.25 1.25 0 0 0 12 8.75"></svg:path>`,
})
export class PrimeMapMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
