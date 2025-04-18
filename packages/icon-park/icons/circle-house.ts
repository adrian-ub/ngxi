import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleHouseIcon],svg[icon-park-circle-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 23H4C4 23 14.5 17 19 12C23.5 7 24.5 4 24.5 4C24.5 4 25.5 7 30 12C34.5 17 44 23 44 23Z"></svg:path><svg:rect width="32" height="13" x="8" y="31" fill="#2F88FF"></svg:rect><svg:rect width="22" height="8" x="13" y="23" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkCircleHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
