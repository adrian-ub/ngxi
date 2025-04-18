import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarTurbineIcon],svg[tabler-car-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6"></svg:path><svg:path d="M11 9q3.733.162 6 0m0-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-6 9l-3.5-1.5M11 13l2.5 3m-5 0l2.5-3m0 0l3.5-1.5M11 9v4"></svg:path></svg:g>`,
})
export class TablerCarTurbineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
