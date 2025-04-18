import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAirTravelIcon],svg[arcticons-air-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.353 33.246c2.734 0 4.903-.421 4.903-4.125V6.988h10.117v26.735c0 4.026-3.104 7.291-10.842 7.291"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.882 6.987h10.202v23.321c0 4.788 1.258 7.849 4.447 10.705c-8.972 0-14.65-1.218-14.65-8.478Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.632 17.867c-4.465 8.355 34.035 4.751 32.387-4.832"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.632 17.867c-24 14.258 44.652 10.286 32.387-4.832"></svg:path>`,
})
export class ArcticonsAirTravelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
