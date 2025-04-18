import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsCircleLinearIcon],svg[solar-menu-dots-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.996 0h.008m3.978 0H16"></svg:path><svg:circle cx="12" cy="12" r="10" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarMenuDotsCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
