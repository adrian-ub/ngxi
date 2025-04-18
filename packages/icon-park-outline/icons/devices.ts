import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDevicesIcon],svg[icon-park-outline-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 43h20V5H14v10"></svg:path><svg:path d="M5 15h18v28H5z"></svg:path><svg:path stroke-linecap="round" d="M13 37h2m13 0h2"></svg:path></svg:g>`,
})
export class IconParkOutlineDevicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
