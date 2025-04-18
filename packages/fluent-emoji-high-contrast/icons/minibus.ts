import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMinibusIcon],svg[fluent-emoji-high-contrast-minibus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 14a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"></svg:path><svg:path d="M6.6 11.2A3 3 0 0 1 9 10h19a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-1.337a3.5 3.5 0 0 1-6.326 0h-8.674a3.5 3.5 0 0 1-6.326 0H4a3 3 0 0 1-3-3v-4.667a5 5 0 0 1 1-3zM9 12a1 1 0 0 0-.8.4l-.45.6H8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4l-.4.533q-.165.222-.287.467H29v-1H19a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10a1 1 0 0 0-1-1zM3 25a1 1 0 0 0 1 1h1.035a3.5 3.5 0 0 1 6.93 0h8.07a3.501 3.501 0 0 1 6.93 0H28a1 1 0 0 0 1-1v-1a1 1 0 1 1 0-2v-1H3zm7 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m15 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastMinibusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
