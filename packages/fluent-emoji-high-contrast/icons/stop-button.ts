import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastStopButtonIcon],svg[fluent-emoji-high-contrast-stop-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.5 8A1.5 1.5 0 0 0 8 9.5v13A1.5 1.5 0 0 0 9.5 24h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 22.5 8z"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastStopButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
