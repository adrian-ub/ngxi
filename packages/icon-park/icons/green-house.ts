import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGreenHouseIcon],svg[icon-park-green-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 20V44H24H6V20L24 4L42 20Z"></svg:path><svg:path stroke-linecap="round" d="M6 24L42 24"></svg:path><svg:path stroke-linecap="round" d="M13 14L13 44"></svg:path><svg:path stroke-linecap="round" d="M35 14L35 44"></svg:path><svg:rect width="8" height="12" x="20" y="32" fill="#2F88FF" stroke-linecap="round"></svg:rect></svg:g>`,
})
export class IconParkGreenHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
