import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3LinearIcon],svg[solar-black-hole-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHole3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
