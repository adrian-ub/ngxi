import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastDivideIcon],svg[fluent-emoji-high-contrast-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.985 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5.06 13.44C3.38 13.44 2 14.82 2 16.5c0 1.69 1.38 3.07 3.06 3.06h21.85c1.68 0 3.06-1.37 3.06-3.06c0-1.68-1.37-3.06-3.06-3.06z"></svg:path>`,
})
export class FluentEmojiHighContrastDivideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
