import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbTypeCIcon],svg[icon-park-usb-type-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15 15H33C48 15 48 33 33 33H15C-1.23978e-05 33 -2.86102e-06 15 15 15Z"></svg:path><svg:path stroke="#fff" d="M21 27V21"></svg:path><svg:path stroke="#fff" d="M27 27V21"></svg:path><svg:path stroke="#fff" d="M33 27V21"></svg:path><svg:path stroke="#fff" d="M15 27V21"></svg:path><svg:path stroke="#fff" d="M36 24L12 24"></svg:path></svg:g>`,
})
export class IconParkUsbTypeCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
