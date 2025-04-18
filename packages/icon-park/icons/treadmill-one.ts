import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreadmillOneIcon],svg[icon-park-treadmill-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M30 14C32.7614 14 35 11.7614 35 9C35 6.23858 32.7614 4 30 4C27.2386 4 25 6.23858 25 9C25 11.7614 27.2386 14 30 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 21L17 16L25 19L22 25L29 31L31 38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 25L17 33L9 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 44H40L44 35"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25 19L33 24L39 22"></svg:path></svg:g>`,
})
export class IconParkTreadmillOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
