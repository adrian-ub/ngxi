import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap8Icon],svg[fluent-emoji-high-contrast-keycap-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.456 12.484a4.516 4.516 0 1 1 8.073 2.783a5.237 5.237 0 1 1-7.091.03a4.5 4.5 0 0 1-.982-2.813m4.516-1.266a1.266 1.266 0 1 0 0 2.533a1.266 1.266 0 0 0 0-2.533M16 17.399a1.737 1.737 0 1 0 0 3.474a1.737 1.737 0 0 0 0-3.474"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap8Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
