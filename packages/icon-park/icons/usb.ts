import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbIcon],svg[icon-park-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 22C14.2091 22 16 20.2091 16 18C16 15.7909 14.2091 14 12 14C9.79086 14 8 15.7909 8 18C8 20.2091 9.79086 22 12 22Z"></svg:path><svg:path fill="#2F88FF" d="M36 28C38.2091 28 40 26.2091 40 24C40 21.7909 38.2091 20 36 20C33.7909 20 32 21.7909 32 24C32 26.2091 33.7909 28 36 28Z"></svg:path><svg:path stroke-linecap="round" d="M19 9L24 4L29 9"></svg:path><svg:path stroke-linecap="round" d="M25 39L12 28.2632V22"></svg:path><svg:path stroke-linecap="round" d="M36 28V32.7895L24 41"></svg:path><svg:path stroke-linecap="round" d="M24 4V43"></svg:path><svg:path stroke-linecap="round" d="M21 44H27"></svg:path></svg:g>`,
})
export class IconParkUsbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
