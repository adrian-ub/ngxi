import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSurprise24FilledIcon],svg[fluent-emoji-surprise-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.004c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m0 10.995a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75m6 0a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499"></svg:path>`,
})
export class FluentEmojiSurprise24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
