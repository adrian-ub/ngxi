import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferLinearIcon],svg[solar-minimalistic-magnifer-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5"></svg:circle><svg:path stroke-linecap="round" d="m20 20l2 2"></svg:path></svg:g>`,
})
export class SolarMinimalisticMagniferLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
