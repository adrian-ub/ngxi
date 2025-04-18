import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarExportLinearIcon],svg[solar-export-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
