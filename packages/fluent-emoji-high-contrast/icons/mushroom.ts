import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMushroomIcon],svg[fluent-emoji-high-contrast-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.68 14.3a2.74 2.74 0 1 1-5.48 0a2.74 2.74 0 0 1 5.48 0"></svg:path><svg:path d="M12.79 4.434A12 12 0 0 1 16 4c1.62 0 3.163.32 4.573.902c3.998 1.65 6.91 5.397 7.365 9.871A12 12 0 0 1 28 16v2a2 2 0 0 1-2 2h-7.368l2.2 5.224A2 2 0 0 1 18.987 28h-6.12a2 2 0 0 1-1.876-2.691L12.947 20H6a2 2 0 0 1-2-2v-2c0-2.271.63-4.395 1.727-6.206a12.03 12.03 0 0 1 7.062-5.36M26 18v-2q0-.374-.027-.74a6.63 6.63 0 0 1-6.543-6.63c0-.668.098-1.312.28-1.92A10 10 0 0 0 16 6c-1.15 0-2.254.194-3.282.551a4.99 4.99 0 0 1-4.935 3.748A9.95 9.95 0 0 0 6 16v2z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastMushroomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
