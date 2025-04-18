import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomInLineDuotoneIcon],svg[solar-minimalistic-magnifer-zoom-in-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferZoomInLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferZoomInLineDuotone0)"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomInLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
