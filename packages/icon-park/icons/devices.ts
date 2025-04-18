import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDevicesIcon],svg[icon-park-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M23 43H43V5H14V15"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M5 15H23V43H5L5 15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 37H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 37H30"></svg:path></svg:g>`,
})
export class IconParkDevicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
