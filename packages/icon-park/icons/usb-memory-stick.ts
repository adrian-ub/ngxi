import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbMemoryStickIcon],svg[icon-park-usb-memory-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 22C8 20.8954 8.89543 20 10 20H38C39.1046 20 40 20.8954 40 22V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V22Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M15 4H33V20H15V4Z"></svg:path><svg:path stroke="#fff" d="M21 10V12"></svg:path><svg:path stroke="#fff" d="M27 10V12"></svg:path></svg:g>`,
})
export class IconParkUsbMemoryStickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
