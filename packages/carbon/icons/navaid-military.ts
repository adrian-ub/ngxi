import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidMilitaryIcon],svg[carbon-navaid-military-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path><svg:path fill="currentColor" d="M16 24a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonNavaidMilitaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
