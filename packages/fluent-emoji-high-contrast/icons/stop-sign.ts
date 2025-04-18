import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastStopSignIcon],svg[fluent-emoji-high-contrast-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.43 4h-6.86c-.99 0-1.93.39-2.63 1.09L5.09 9.94c-.7.7-1.09 1.64-1.09 2.63v6.86c0 .99.39 1.93 1.09 2.63l4.85 4.85c.7.7 1.64 1.09 2.63 1.09h6.86c.99 0 1.93-.39 2.63-1.09l4.85-4.85c.7-.7 1.09-1.64 1.09-2.63v-6.86c0-.99-.39-1.93-1.09-2.63l-4.85-4.85c-.7-.7-1.64-1.09-2.63-1.09"></svg:path><svg:path d="M20.26 0h-8.52c-1.521 0-2.97.601-4.044 1.676l-6.02 6.02A5.7 5.7 0 0 0 0 11.74v8.52c0 1.521.601 2.97 1.676 4.044l6.02 6.02A5.7 5.7 0 0 0 11.74 32h8.52c1.521 0 2.97-.601 4.044-1.676l6.02-6.02A5.7 5.7 0 0 0 32 20.26v-8.52c0-1.521-.601-2.97-1.676-4.044l-6.02-6.02A5.7 5.7 0 0 0 20.26 0m-8.52 2h8.52c.99 0 1.93.39 2.63 1.09l6.02 6.02c.7.7 1.09 1.64 1.09 2.63v8.52c0 .99-.39 1.93-1.09 2.63l-6.02 6.02c-.7.7-1.64 1.09-2.63 1.09h-8.52c-.99 0-1.93-.39-2.63-1.09l-6.02-6.02c-.7-.7-1.09-1.64-1.09-2.63v-8.52c0-.99.39-1.93 1.09-2.63l6.02-6.02c.7-.7 1.64-1.09 2.63-1.09"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastStopSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
