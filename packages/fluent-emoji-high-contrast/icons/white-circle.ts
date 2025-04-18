import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastWhiteCircleIcon],svg[fluent-emoji-high-contrast-white-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13S23.18 3 16 3M1 16C1 7.716 7.716 1 16 1s15 6.716 15 15s-6.716 15-15 15S1 24.284 1 16"></svg:path>`,
})
export class FluentEmojiHighContrastWhiteCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
