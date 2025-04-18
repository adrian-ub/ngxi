import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarImportLineDuotoneIcon],svg[solar-import-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarImportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
