import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNoticeIcon],svg[ooui-notice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0m1 16H9v-2h2zm0-4H9V4h2z"></svg:path>`,
})
export class OouiNoticeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
