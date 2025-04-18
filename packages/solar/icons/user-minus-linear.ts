import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserMinusLinearIcon],svg[solar-user-minus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5"></svg:path><svg:circle cx="18" cy="16" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 16h2"></svg:path></svg:g>`,
})
export class SolarUserMinusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
