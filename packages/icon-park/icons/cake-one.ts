import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCakeOneIcon],svg[icon-park-cake-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 14L9 21.9H39L34 15"></svg:path><svg:circle cx="31" cy="13" r="4" fill="#fff"></svg:circle><svg:path stroke-linecap="round" d="M33 9L35 4"></svg:path><svg:path d="M9.5 26.9568C8.89836 27.2575 8.33775 27.5769 7.82243 27.913C5.41836 29.481 4 31.4118 4 33.4999C4 38.7466 12.9543 42.9999 24 42.9999C35.0457 42.9999 44 38.7466 44 33.4999C44 31.3609 42.5116 29.3869 40 27.799"></svg:path><svg:rect width="30" height="12" x="9" y="22" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path d="M9 22H40"></svg:path></svg:g>`,
})
export class IconParkCakeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
