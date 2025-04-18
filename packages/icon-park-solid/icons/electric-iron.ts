import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidElectricIronIcon],svg[icon-park-solid-electric-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18.713c0-.394.319-.713.713-.713h13.439C32.322 18 43 28.677 43 41.848v0a.15.15 0 0 1-.152.152H5zM5 18V8h20"></svg:path><svg:circle cx="15" cy="27" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M5 36h37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 20c1.333-2 5.4-6.4 9-4c3.5 2.334.5 8-1 10"></svg:path></svg:g>`,
})
export class IconParkSolidElectricIronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
