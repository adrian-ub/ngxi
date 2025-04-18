import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneElectricIronIcon],svg[icon-park-twotone-electric-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTElectricIron0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18.713c0-.394.319-.713.713-.713h13.439C32.322 18 43 28.677 43 41.848v0a.15.15 0 0 1-.152.152H5zM5 18V8h20"></svg:path><svg:circle cx="15" cy="27" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" d="M5 36h37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 20c1.333-2 5.4-6.4 9-4c3.5 2.334.5 8-1 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTElectricIron0)"></svg:path>`,
})
export class IconParkTwotoneElectricIronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
