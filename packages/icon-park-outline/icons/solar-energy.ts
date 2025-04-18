import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSolarEnergyIcon],svg[icon-park-outline-solar-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="40" height="24" x="4" y="8" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 32V8M18 32V8m24 12H6m18 21v-9m7 9H17"></svg:path></svg:g>`,
})
export class IconParkOutlineSolarEnergyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
