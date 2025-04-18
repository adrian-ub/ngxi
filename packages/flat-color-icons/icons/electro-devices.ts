import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsElectroDevicesIcon],svg[flat-color-icons-electro-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M39 43H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#80DEEA" d="m33.2 5l-9.8 10.1L36 19.3L22.8 31.7l4.3 2.4L15 37l2.3-12.5l2.4 4.3l8-7.8L15 16.8L25.9 5z"></svg:path>`,
})
export class FlatColorIconsElectroDevicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
