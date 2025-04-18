import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiMultiple24RegularIcon],svg[fluent-emoji-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a6.5 6.5 0 0 1 6.312 4.943a8 8 0 0 0-1.506.171a5 5 0 1 0-6.191 6.191a8 8 0 0 0-.172 1.507A6.5 6.5 0 0 1 8.5 2m.16 8.006a8 8 0 0 1 1.202-1.23a3.5 3.5 0 0 0-4.022.95a.75.75 0 1 0 1.14.974a2 2 0 0 1 1.68-.694M7.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5.458 2.042a.75.75 0 0 1 .082 1.058a4 4 0 0 1-6.075.005a.75.75 0 0 1 1.138-.977a2.5 2.5 0 0 0 3.797-.003a.75.75 0 0 1 1.058-.083M17.5 14.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M15 22a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11"></svg:path>`,
})
export class FluentEmojiMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
