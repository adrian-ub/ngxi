import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastOliveIcon],svg[fluent-emoji-high-contrast-olive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.427 9.994a4.43 4.43 0 1 1-8.86 0a4.43 4.43 0 0 1 8.86 0"></svg:path><svg:path d="M25.974 6.016C19.868-.079 10.39-.782 4.8 4.796c-5.591 5.582-4.875 15.06 1.23 21.165s15.583 6.821 21.174 1.23s4.875-15.07-1.23-21.175m-19.76.196c4.65-4.641 12.852-4.265 18.346 1.22c5.495 5.494 5.88 13.696 1.23 18.345c-4.65 4.65-12.85 4.265-18.346-1.23c-5.495-5.495-5.878-13.696-1.23-18.335"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastOliveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
