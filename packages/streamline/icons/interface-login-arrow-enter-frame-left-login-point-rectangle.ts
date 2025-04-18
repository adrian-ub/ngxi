import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLoginArrowEnterFrameLeftLoginPointRectangleIcon],svg[streamline-interface-login-arrow-enter-frame-left-login-point-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 10v2.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1V4m3 3h-8"></svg:path><svg:path d="m6.5 5l-2 2l2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLoginArrowEnterFrameLeftLoginPointRectangleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
