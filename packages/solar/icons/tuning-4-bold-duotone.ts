import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning4BoldDuotoneIcon],svg[solar-tuning-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-2 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path fill="currentColor" d="M13.855 12.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zm-3.71-1.5a2 2 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5zm1.71 8a2 2 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5zm-3.71 0H5a.75.75 0 0 0 0 1.5h3.145a2 2 0 0 1 0-1.5m7.71-14.5a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zm-3.71 0a2 2 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5z" opacity=".5"></svg:path>`,
})
export class SolarTuning4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
