import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWeechatIcon],svg[arcticons-weechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.457 14.898a21.6 21.6 0 0 0 1.831-12.186a21.6 21.6 0 0 0-12.186 1.83a21.3 21.3 0 0 0-18.204 0a21.6 21.6 0 0 0-12.186-1.83a21.6 21.6 0 0 0 1.83 12.186A21.492 21.492 0 1 0 45.5 24a21.4 21.4 0 0 0-2.043-9.102"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 30.145a3.355 3.355 0 1 1 6.71 0Zm13.29 0a3.355 3.355 0 0 1 6.71 0Z"></svg:path>`,
})
export class ArcticonsWeechatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
