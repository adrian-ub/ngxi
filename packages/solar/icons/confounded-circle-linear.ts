import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleLinearIcon],svg[solar-confounded-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"></svg:path></svg:g>`,
})
export class SolarConfoundedCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
