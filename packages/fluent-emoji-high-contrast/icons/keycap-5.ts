import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap5Icon],svg[fluent-emoji-high-contrast-keycap-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.828 8.12a1.75 1.75 0 0 0-1.75 1.75v5.025c0 .967.784 1.75 1.75 1.75h2.719a2.11 2.11 0 1 1-1.582 3.505a1.75 1.75 0 0 0-2.624 2.316a5.61 5.61 0 1 0 4.206-9.321h-.969v-1.524h3.688a1.75 1.75 0 0 0 0-3.5z"></svg:path><svg:path d="M6 1.12a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5v-20a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap5Icon {
  readonly viewBox = input("0 0 32 33")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
