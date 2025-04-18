import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUsbTypeCIcon],svg[icon-park-outline-usb-type-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 15h18c15 0 15 18 0 18H15C0 33 0 15 15 15m6 12v-6m6 6v-6m6 6v-6m-18 6v-6m21 3H12"></svg:path>`,
})
export class IconParkOutlineUsbTypeCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
