import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarImportBoldDuotoneIcon],svg[solar-import-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 0 16 0z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarImportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
