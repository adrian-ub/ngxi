import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMultiplyIcon],svg[fluent-emoji-high-contrast-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.223 2.893a3.07 3.07 0 0 0-4.33 0a3.084 3.084 0 0 0 0 4.34l8.747 8.744l-8.737 8.746a3.07 3.07 0 0 0 0 4.33a3.07 3.07 0 0 0 4.33 0l8.74-8.745l8.74 8.735a3.07 3.07 0 0 0 4.33 0a3.07 3.07 0 0 0 0-4.33l-8.738-8.738l8.747-8.752a3.07 3.07 0 0 0 0-4.33c-1.2-1.19-3.15-1.19-4.34 0l-8.74 8.749z"></svg:path>`,
})
export class FluentEmojiHighContrastMultiplyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
