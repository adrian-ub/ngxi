import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSolarEnergyOneIcon],svg[icon-park-twotone-solar-energy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSolarEnergyOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M10 30h6a6 6 0 0 1 0 12h-6z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 28v16M4 32h6m-6 6h6m12-2h8a2 2 0 0 0 2-2V23m0-19v7m-9.121-3.121l4.243 4.243m-4.243 12.999l4.243-4.242m13.999-13l-4.242 4.243m4.242 12.999L36.88 20.88"></svg:path><svg:circle cx="32" cy="17" r="6" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 17h6m12 0h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSolarEnergyOne0)"></svg:path>`,
})
export class IconParkTwotoneSolarEnergyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
