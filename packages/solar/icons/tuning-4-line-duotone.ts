import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning4LineDuotoneIcon],svg[solar-tuning-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm2-8a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-4 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path><svg:path stroke-linecap="round" d="M12 20h7m0-8h-5m5-8h-3m-4 0H5m5 8H5m0 8h2.667" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTuning4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
