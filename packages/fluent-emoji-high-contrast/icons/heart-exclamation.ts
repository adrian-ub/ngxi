import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastHeartExclamationIcon],svg[fluent-emoji-high-contrast-heart-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.998 5.21s1.71-2.68 3.938-3.08c5.51-.994 7.788 3.943 6.865 7.616C25.16 16.28 15.997 22 15.997 22S6.836 16.28 5.196 9.746c-.913-3.673 1.356-8.61 6.865-7.617c2.229.402 3.937 3.081 3.937 3.081M19 27a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class FluentEmojiHighContrastHeartExclamationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
