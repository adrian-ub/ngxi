import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap5Icon],svg[fluent-emoji-flat-keycap-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6.12a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M11.078 9.87c0-.966.784-1.75 1.75-1.75h5.438a1.75 1.75 0 0 1 0 3.5h-3.688v1.525h.969a5.61 5.61 0 1 1-4.206 9.321a1.75 1.75 0 0 1 2.624-2.316a2.11 2.11 0 1 0 1.582-3.504h-2.719a1.75 1.75 0 0 1-1.75-1.75z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap5Icon {
  readonly viewBox = input("0 0 32 33")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
