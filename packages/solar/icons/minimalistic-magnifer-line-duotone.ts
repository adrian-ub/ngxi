import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferLineDuotoneIcon],svg[solar-minimalistic-magnifer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="m20 20l2 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferLineDuotone0)"></svg:path>`,
})
export class SolarMinimalisticMagniferLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
