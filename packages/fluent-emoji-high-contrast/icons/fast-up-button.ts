import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFastUpButtonIcon],svg[fluent-emoji-high-contrast-fast-up-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.962 15h5.348c.882 0 1.332-1.058.72-1.693l-6.31-6.558a1 1 0 0 0-1.44 0l-6.31 6.558c-.612.635-.162 1.693.72 1.693h5.348l-6.069 6.307c-.611.635-.16 1.693.72 1.693H22.31c.882 0 1.332-1.058.72-1.693z"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFastUpButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
