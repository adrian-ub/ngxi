import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlateLineDuotoneIcon],svg[solar-plate-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 4.001c3.114.01 4.765.108 5.828 1.17C22 6.344 22 8.23 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4" opacity=".5"></svg:path><svg:path d="M12 5V3m-4 7.5h8M8 14h5.5"></svg:path></svg:g>`,
})
export class SolarPlateLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
