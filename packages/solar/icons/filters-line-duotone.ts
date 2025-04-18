import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFiltersLineDuotoneIcon],svg[solar-filters-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"></svg:path><svg:path d="M6.5 10.189a6 6 0 1 0 7.106 3.669"></svg:path><svg:path d="M12 20.472a6 6 0 1 0 5.5-10.283" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFiltersLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
