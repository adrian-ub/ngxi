import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastLockedIcon],svg[fluent-emoji-high-contrast-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.5 18.5c0 .818-.393 1.544-1 2V24a1.5 1.5 0 0 1-3 0v-3.5a2.5 2.5 0 1 1 4-2"></svg:path><svg:path d="M10 7a6 6 0 0 1 12 0v3h2a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4h2zm9.5 0a3.5 3.5 0 1 0-7 0v3h7zM8 12a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastLockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
