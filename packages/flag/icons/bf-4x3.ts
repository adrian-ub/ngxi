import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBf4x3Icon],svg[flag-bf-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#de0000" d="M640 479.6H.4V0H640z"></svg:path><svg:path fill="#35a100" d="M639.6 480H0V240.2h639.6z"></svg:path><svg:path fill="#fff300" d="m254.6 276.2l-106-72.4h131L320 86.6L360.4 204l131-.1l-106 72.4l40.5 117.3l-106-72.6L214 393.4"></svg:path></svg:g>`,
})
export class FlagBf4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
