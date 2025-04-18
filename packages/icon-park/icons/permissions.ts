import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPermissionsIcon],svg[icon-park-permissions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M20 10H6C4.89543 10 4 10.8954 4 12V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V35.5"></svg:path><svg:path d="M10 23H18"></svg:path><svg:path d="M10 31H34"></svg:path><svg:circle cx="34" cy="16" r="6" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path stroke-linejoin="round" d="M44 28.4187C42.0468 24.6023 37.9999 22 33.9999 22C29.9999 22 28.0071 23.1329 25.9502 25"></svg:path></svg:g>`,
})
export class IconParkPermissionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
