import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3BrokenIcon],svg[solar-black-hole-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-2.78 3.707-3.89 7-3.024m5 6.024c0-1.97-.806-3.456-2-4.49M14 12c0 2.779-3.707 3.89-7 3.024M2 9c0 1.68.586 3.008 1.5 4.004"></svg:path></svg:g>`,
})
export class SolarBlackHole3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
