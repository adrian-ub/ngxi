import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolarEnergyIcon],svg[icon-park-solar-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="40" height="24" x="4" y="8" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 32L30 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 32L18 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20L6 20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 41V32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 41H17"></svg:path></svg:g>`,
})
export class IconParkSolarEnergyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
