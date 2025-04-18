import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSmileSlight20RegularIcon],svg[fluent-emoji-smile-slight-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 8.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-.026 4.553a.5.5 0 1 0-.448.894c.584.292 1.289.428 1.974.428s1.39-.136 1.974-.428a.5.5 0 1 0-.448-.894c-.416.208-.961.322-1.526.322s-1.11-.114-1.526-.322M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path>`,
})
export class FluentEmojiSmileSlight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
