import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFastForwardButtonIcon],svg[fluent-emoji-high-contrast-fast-forward-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m17 15.038l-6.307-6.069C10.058 8.358 9 8.81 9 9.69v12.62c0 .882 1.058 1.332 1.693.72L17 16.963v5.348c0 .882 1.058 1.332 1.693.72l6.558-6.31a1 1 0 0 0 0-1.44l-6.558-6.31C18.058 8.357 17 8.807 17 9.69z"></svg:path><svg:path d="M1 6a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFastForwardButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
