import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSadSlight20FilledIcon],svg[fluent-emoji-sad-slight-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m.303 4.5h.797a.5.5 0 0 1 0 1h-.797c-1.077 0-2.13.319-3.026.916a.5.5 0 1 1-.554-.832A6.45 6.45 0 0 1 12.803 12"></svg:path>`,
})
export class FluentEmojiSadSlight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
