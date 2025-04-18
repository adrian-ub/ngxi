import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneIcon],svg[streamline-airport-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.33 10.67H1.88a1.45 1.45 0 0 1 0-2.89h2.3L5.66 6.3L1.6 3.8a1.45 1.45 0 0 1-.52-1.91a1.47 1.47 0 0 1 2-.77l5.3 2.45L10.94.98a1.47 1.47 0 1 1 2.08 2.08l-2.59 2.56l2.45 5.35a1.46 1.46 0 0 1-.77 1.95a1.45 1.45 0 0 1-1.91-.52L7.7 8.34L6.22 9.82v2.3a1.45 1.45 0 0 1-2.89 0z"></svg:path>`,
})
export class StreamlineAirportPlaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
