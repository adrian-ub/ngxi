import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap7Icon],svg[fluent-emoji-flat-keycap-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M11.038 9.722c0-.966.784-1.75 1.75-1.75h7.474a1.75 1.75 0 0 1 1.52 2.619l-7.253 12.695a1.75 1.75 0 0 1-3.039-1.736l5.757-10.078h-4.459a1.75 1.75 0 0 1-1.75-1.75"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap7Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
