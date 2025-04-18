import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenMarkIcon],svg[tdesign-pen-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.555 6.88L17.328.651L3.979 14.002l-.565 2.826l3.965 3.966l2.827-.566zm-2.829 0L9.22 18.385l-1.184.236l-2.451-2.451l.236-1.184L17.328 3.481zM1.386 19.612l3.208 3.208l1.414-1.414L2.8 18.2z"></svg:path>`,
})
export class TdesignPenMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
