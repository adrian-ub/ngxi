import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastHeavyEqualsSignIcon],svg[fluent-emoji-high-contrast-heavy-equals-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.063 7C3.381 7 2 8.343 2 10c0 1.647 1.381 3 3.063 3h21.874C28.618 13 30 11.657 30 10c0-1.647-1.372-3-3.063-3zm0 12C3.381 19 2 20.343 2 22c0 1.647 1.381 3 3.063 3h21.874C28.618 25 30 23.657 30 22c0-1.647-1.372-3-3.063-3z"></svg:path>`,
})
export class FluentEmojiHighContrastHeavyEqualsSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
