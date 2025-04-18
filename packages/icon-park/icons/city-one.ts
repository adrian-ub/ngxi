import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCityOneIcon],svg[icon-park-city-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M4 42H44"></svg:path><svg:rect width="12" height="20" x="8" y="22" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:rect width="20" height="38" x="20" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M28 32.0083H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 32.0083H16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 23.0083H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 14.0083H32"></svg:path></svg:g>`,
})
export class IconParkCityOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
