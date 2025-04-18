import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineRepeatOnIcon],svg[ic-outline-repeat-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-2 18H6.83l1.58 1.58L7 22l-4-4l4-4l1.41 1.42L6.83 17H17v-4h2zm-2-9l-1.41-1.42L17.17 7H7v4H5V5h12.17l-1.58-1.58L17 2l4 4z"></svg:path>`,
})
export class IcOutlineRepeatOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
