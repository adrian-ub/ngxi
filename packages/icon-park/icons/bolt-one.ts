import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBoltOneIcon],svg[icon-park-bolt-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 12.2802C12 12.1254 12.1254 12 12.2802 12H35.7198C35.8746 12 36 12.1254 36 12.2802V24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24V12.2802Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 12V4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 27H26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 36V41C24 42.6569 25.3431 44 27 44H38"></svg:path></svg:g>`,
})
export class IconParkBoltOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
