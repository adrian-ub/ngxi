import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastOrthodoxCrossIcon],svg[fluent-emoji-high-contrast-orthodox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 7a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2h-2v2h5a1 1 0 1 1 0 2h-5v6.31L19.928 22a1 1 0 1 1-1 1.732L17 22.619V25a1 1 0 1 1-2 0v-3.536l-2.134-1.232a1 1 0 0 1 1-1.732l1.134.655V14h-5a1 1 0 1 1 0-2h5v-2h-2a1 1 0 1 1 0-2h2z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastOrthodoxCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
