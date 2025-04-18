import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceAway16FilledIcon],svg[fluent-presence-away-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.5-11.5v3.02l2.125 1.7a1 1 0 1 1-1.25 1.56l-2.5-2A1 1 0 0 1 6.5 8V4.5a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentPresenceAway16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
