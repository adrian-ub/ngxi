import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbOneIcon],svg[icon-park-usb-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M42 21H6V42H42V21Z"></svg:path><svg:path stroke-linecap="round" d="M14 21V6H34V21"></svg:path><svg:path stroke-linecap="round" d="M20 12V14"></svg:path><svg:path stroke-linecap="round" d="M28 12V14"></svg:path></svg:g>`,
})
export class IconParkUsbOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
