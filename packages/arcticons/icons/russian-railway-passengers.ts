import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRussianRailwayPassengersIcon],svg[arcticons-russian-railway-passengers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.175 21.055V31.49m16.098-10.46l-5.253 6.703m9.22-6.703l-2.441 3.254l1.716 2.777h5.341c3.36 0 3.428-9.98-.3-10.064h-5.519M8.788 21.065l10.01-.035l2.3 2.812l-3.06 3.891"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsRussianRailwayPassengersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
