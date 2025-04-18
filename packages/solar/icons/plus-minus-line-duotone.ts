import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusLineDuotoneIcon],svg[solar-plus-minus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M3.465 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464M3.465 20.536l17.07-17.072"></svg:path><svg:path stroke-linecap="round" d="M18 17h-5m-2.5-9H8m0 0H5.5M8 8V5.5M8 8v2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlusMinusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
