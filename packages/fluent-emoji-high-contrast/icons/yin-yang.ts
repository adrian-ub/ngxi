import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastYinYangIcon],svg[fluent-emoji-high-contrast-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6s10 4.477 10 10m-1.5 0a8.5 8.5 0 0 0-8.607-8.5a4.25 4.25 0 0 0 .076 8.5a4.25 4.25 0 1 1 0 8.5H16a8.5 8.5 0 0 0 8.5-8.5m-6.406 4.25a2.125 2.125 0 1 0-4.25 0a2.125 2.125 0 0 0 4.25 0"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastYinYangIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
