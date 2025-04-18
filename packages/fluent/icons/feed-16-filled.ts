import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFeed16FilledIcon],svg[fluent-feed-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A1.5 1.5 0 0 1 3.5 3h3.995a1.5 1.5 0 0 1 1.5 1.5V5h3.555c.734.026 1.45.547 1.45 1.51v3.03a1.5 1.5 0 0 1-1.5 1.5h-1.387l-.146.746c-.162.828-.814 1.216-1.467 1.213L3.5 13A1.5 1.5 0 0 1 2 11.5zm6.995 6.999c0 .605.874.69.99.095l.892-4.58v-.002l.15-.783l.006-.031l.012-.054l.01-.044l.03-.1h-2.09zM4.485 5.99a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.01 1.5a.5.5 0 0 0 0 1h1.99a.501.501 0 1 0 0-1zm0 2.51a.5.5 0 0 0 0 1h1.99a.5.5 0 0 0 .262-.925l-.022-.013a.5.5 0 0 0-.129-.05l-.01-.002l-.078-.01H4.494"></svg:path>`,
})
export class FluentFeed16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
