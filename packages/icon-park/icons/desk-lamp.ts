import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeskLampIcon],svg[icon-park-desk-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M8 24.5957C8 25.3713 8.62871 26 9.40426 26H38.5957C39.3713 26 40 25.3713 40 24.5957V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V24.5957Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 42L24 26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 32L15 26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 42H15"></svg:path></svg:g>`,
})
export class IconParkDeskLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
