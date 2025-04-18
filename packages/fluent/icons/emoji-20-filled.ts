import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmoji20FilledIcon],svg[fluent-emoji-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0m-6.5-1.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-5 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m.389 4.015A4 4 0 0 0 10 14a4 4 0 0 0 3.111-1.485a.5.5 0 1 1 .778.629A5 5 0 0 1 10 15a5 5 0 0 1-3.889-1.856a.5.5 0 1 1 .778-.63"></svg:path>`,
})
export class FluentEmoji20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
