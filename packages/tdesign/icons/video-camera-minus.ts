import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraMinusIcon],svg[tdesign-video-camera-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4.234v15.49l-7-4V20H0V4h17v4.434zm-7 6.532v2.654l5 2.857v-8.51zM15 18V6H2v12zm-2.5-5h-8v-2h8z"></svg:path>`,
})
export class TdesignVideoCameraMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
