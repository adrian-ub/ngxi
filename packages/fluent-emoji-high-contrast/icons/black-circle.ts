import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBlackCircleIcon],svg[fluent-emoji-high-contrast-black-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1"></svg:path>`,
})
export class FluentEmojiHighContrastBlackCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
