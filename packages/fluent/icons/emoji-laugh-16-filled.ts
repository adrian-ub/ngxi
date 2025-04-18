import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiLaugh16FilledIcon],svg[fluent-emoji-laugh-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M6 6a.5.5 0 0 1 .5.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 0-3 0a.5.5 0 0 0 1 0A.5.5 0 0 1 6 6m4 0a.5.5 0 0 1 .5.5a.5.5 0 0 0 1 0a1.5 1.5 0 0 0-3 0a.5.5 0 0 0 1 0A.5.5 0 0 1 10 6M4.535 8.5a3.5 3.5 0 0 0 6.93 0z"></svg:path>`,
})
export class FluentEmojiLaugh16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
