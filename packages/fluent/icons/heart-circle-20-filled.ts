import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartCircle20FilledIcon],svg[fluent-heart-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0m7.6-2.385L9.99 8l.4-.393a2.12 2.12 0 0 1 3.035 2.959l-3.06 3.273a.5.5 0 0 1-.73 0L6.57 10.561A2.113 2.113 0 0 1 9.6 7.615"></svg:path>`,
})
export class FluentHeartCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
