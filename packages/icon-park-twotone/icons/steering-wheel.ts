import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSteeringWheelIcon],svg[icon-park-twotone-steering-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipTSteeringWheel0" fill="#555" d="M32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:mask id="ipTSteeringWheel1"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0 0V32M4 24h12m28 0H32"></svg:path><svg:use href="#ipTSteeringWheel0"></svg:use><svg:use href="#ipTSteeringWheel0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSteeringWheel1)"></svg:path>`,
})
export class IconParkTwotoneSteeringWheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
