import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadishIcon],svg[icon-park-radish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M37 23.2C37 32 24 44 24 44C24 44 11 32 11 23.2C11 15.9098 16.8203 10 24 10C31.1797 10 37 15.9098 37 23.2Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" d="M24 4V10"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" d="M18 5L22 10"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" d="M30 5L26 10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" d="M12 20H20"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" d="M29 27H36"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" d="M16 34H22"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M13.812 15C12.0515 17.2521 11 20.1014 11 23.2C11 28.7547 16.1797 35.5844 20 39.8663"></svg:path><svg:path stroke="#000" d="M37.0005 23.2C37.0005 25.974 35.7087 29.066 33.9395 31.9999"></svg:path></svg:g>`,
})
export class IconParkRadishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
