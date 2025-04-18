import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleRightIcon],svg[uis-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L9.3 12L7 14.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4zm8.5 3l-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3l-2.3 2.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l3-3c.3-.4.3-1 0-1.4"></svg:path>`,
})
export class UisAngleDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
