import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSmileSlight20FilledIcon],svg[fluent-emoji-smile-slight-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-4.026 5.553c.416.208.961.322 1.526.322s1.11-.114 1.526-.322a.5.5 0 1 1 .448.894c-.584.292-1.289.428-1.974.428s-1.39-.136-1.974-.428a.5.5 0 1 1 .448-.894"></svg:path>`,
})
export class FluentEmojiSmileSlight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
