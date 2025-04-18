import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAutoFixNormalIcon],svg[ic-twotone-auto-fix-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.415 18.167l7.17-7.17l1.414 1.414l-7.17 7.17z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-2.29 2.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29s-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42M5.83 19.59l-1.41-1.41L11.59 11L13 12.41zM14.41 11L13 9.59l1.17-1.17l1.41 1.41z"></svg:path>`,
})
export class IcTwotoneAutoFixNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
