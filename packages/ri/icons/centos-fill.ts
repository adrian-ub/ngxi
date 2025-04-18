import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCentosFillIcon],svg[ri-centos-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.06l4.47 4.471L12 22l-4.47-4.47zm-8 3.06L7.879 20H4zm16 0V20h-3.88zm-2.47-8.59L22 12l-4.469 4.47l-4.47-4.47zm-11.06 0L10.94 12l-4.471 4.469L2 12zM12 2l4.469 4.469L12 10.939L7.53 6.47zM7.879 4l-3.88 3.879L4 4zM20 4v3.879l-3.88-3.88z"></svg:path>`,
})
export class RiCentosFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
