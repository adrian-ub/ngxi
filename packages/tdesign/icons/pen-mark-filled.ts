import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenMarkFilledIcon],svg[tdesign-pen-mark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.555 6.88L17.328.651L3.979 14.002l-.565 2.826l3.965 3.966l2.827-.566zM1.385 19.612l3.21 3.208l1.413-1.414L2.8 18.2z"></svg:path>`,
})
export class TdesignPenMarkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
