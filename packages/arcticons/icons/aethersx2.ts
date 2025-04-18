import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAethersx2Icon],svg[arcticons-aethersx2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.672 4.477L5.907 11.615a.37.37 0 0 0-.214.372l2.108 20.476a.49.49 0 0 0 .262.386l18.14 9.462a.37.37 0 0 0 .429-.058l12.722-11.87a.7.7 0 0 0 .22-.443l2.052-19.709a.315.315 0 0 0-.227-.335L22.168 4.44a.72.72 0 0 0-.496.037"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.798 11.902l21.005 7.667l-.308 22.76m14.993-32.113l-14.644 9.51"></svg:path>`,
})
export class ArcticonsAethersx2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
