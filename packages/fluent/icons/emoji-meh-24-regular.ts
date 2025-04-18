import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiMeh24RegularIcon],svg[fluent-emoji-meh-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.751a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.5m6 0a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.499M8.25 15a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17"></svg:path>`,
})
export class FluentEmojiMeh24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
