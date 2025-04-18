import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUsbOneIcon],svg[icon-park-outline-usb-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 21H6v21h36z"></svg:path><svg:path stroke-linecap="round" d="M14 21V6h20v15m-14-9v2m8-2v2"></svg:path></svg:g>`,
})
export class IconParkOutlineUsbOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
