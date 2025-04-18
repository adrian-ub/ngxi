import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiAdd20RegularIcon],svg[fluent-emoji-add-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9a8 8 0 1 0-7.411 7.979a5.5 5.5 0 0 1-.383-.982L9 16a7 7 0 1 1 6.997-6.794q.514.146.982.383A8 8 0 0 0 17 9m-7.978 5q.047-.518.186-1.005a3.99 3.99 0 0 1-3.32-1.48a.5.5 0 1 0-.777.629A5 5 0 0 0 9 14zM12.5 7.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></svg:path>`,
})
export class FluentEmojiAdd20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
