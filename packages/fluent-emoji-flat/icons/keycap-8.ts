import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap8Icon],svg[fluent-emoji-flat-keycap-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M15.972 7.968a4.516 4.516 0 0 0-3.534 7.329a5.237 5.237 0 1 0 7.091-.03a4.516 4.516 0 0 0-3.557-7.3m-1.266 4.516a1.266 1.266 0 1 1 2.532 0a1.266 1.266 0 0 1-2.532 0m-.443 6.652a1.737 1.737 0 1 1 3.474 0a1.737 1.737 0 0 1-3.474 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap8Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
