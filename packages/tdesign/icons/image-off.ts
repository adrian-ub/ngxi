import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageOffIcon],svg[tdesign-image-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 .586L.586 22L2 23.414L3.414 22H22V3.414L23.414 2zM11.5 13.914L17.586 20H5.414zm8.5 5.672L12.915 12.5l1.06-1.062a3.21 3.21 0 0 0 4.463-4.463L20 5.414zm-4.47-9.614l1.443-1.442q.027.125.028.26a1.21 1.21 0 0 1-1.47 1.182M2.004 2l-.005 15.658l2.005-1.696V4l11.362.002l2.37-2.004z"></svg:path>`,
})
export class TdesignImageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
