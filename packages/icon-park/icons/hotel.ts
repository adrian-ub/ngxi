import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHotelIcon],svg[icon-park-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 4H44"></svg:path><svg:rect width="32" height="40" x="8" y="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 32H28V44H20V32Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 12L17 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18L17 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 12L25 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 18L25 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 12L33 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18L33 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 32H30C30.5523 32 31.0098 31.548 30.9044 31.0058C30.3517 28.1653 27.4709 26 24 26C20.5291 26 17.6483 28.1653 17.0956 31.0058C16.9902 31.548 17.4477 32 18 32H20"></svg:path></svg:g>`,
})
export class IconParkHotelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
