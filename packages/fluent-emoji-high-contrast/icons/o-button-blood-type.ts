import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastOButtonBloodTypeIcon],svg[fluent-emoji-high-contrast-o-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.008 7a5.977 5.977 0 0 0-5.977 5.977v6.046a5.977 5.977 0 1 0 11.953 0v-6.046A5.976 5.976 0 0 0 16.008 7m-2.977 5.977a2.977 2.977 0 0 1 5.953 0v6.046a2.977 2.977 0 0 1-5.953 0z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastOButtonBloodTypeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
