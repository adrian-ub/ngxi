import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsBrokenIcon],svg[solar-menu-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 14a2 2 0 1 0-2-2"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M21 12a2 2 0 1 1-2-2"></svg:path></svg:g>`,
})
export class SolarMenuDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
