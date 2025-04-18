import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAddCircleLinearIcon],svg[solar-add-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"></svg:path></svg:g>`,
})
export class SolarAddCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
