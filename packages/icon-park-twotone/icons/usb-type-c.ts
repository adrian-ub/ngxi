import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneUsbTypeCIcon],svg[icon-park-twotone-usb-type-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTUsbTypeC0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M15 15h18c15 0 15 18 0 18H15C0 33 0 15 15 15"></svg:path><svg:path d="M21 27v-6m6 6v-6m6 6v-6m-18 6v-6m21 3H12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUsbTypeC0)"></svg:path>`,
})
export class IconParkTwotoneUsbTypeCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
