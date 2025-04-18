import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDevicesIcon],svg[icon-park-solid-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDevices0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M23 43h20V5H14v10"></svg:path><svg:path fill="#fff" stroke="#fff" d="M5 15h18v28H5z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 37h2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 37h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDevices0)"></svg:path>`,
})
export class IconParkSolidDevicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
