import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastKeycap4Icon],svg[fluent-emoji-high-contrast-keycap-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.613 7.802a1.75 1.75 0 0 1 1.275 2.121l-1.292 5.182h1.9V14a1.75 1.75 0 1 1 3.5 0v1.14a1.75 1.75 0 0 1 0 3.43v3.81a1.75 1.75 0 1 1-3.5 0v-3.775h-4.14a1.75 1.75 0 0 1-1.698-2.173l1.834-7.355a1.75 1.75 0 0 1 2.121-1.275"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastKeycap4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
