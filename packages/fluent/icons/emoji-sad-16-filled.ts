import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSad16FilledIcon],svg[fluent-emoji-sad-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M6.25 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3.5 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.118 3.322a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644c.925-1.096 2.81-1.096 3.736 0"></svg:path>`,
})
export class FluentEmojiSad16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
