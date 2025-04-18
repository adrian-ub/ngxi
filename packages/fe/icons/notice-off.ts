import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feNoticeOffIcon],svg[fe-notice-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 18v1a3 3 0 0 1-6 0v-1H5c-.55 0-1-.45-1-1s.45-1 1-1h1v-6a6 6 0 0 1 .257-1.743L5 7a1.414 1.414 0 1 1 2-2l11 11h1a1 1 0 0 1 0 2zm-3 2a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1M8.876 4.876A6 6 0 0 1 11 4.083V3a1 1 0 0 1 2 0v1.083c2.838.476 5 2.944 5 5.917v4z"></svg:path>`,
})
export class FeNoticeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
