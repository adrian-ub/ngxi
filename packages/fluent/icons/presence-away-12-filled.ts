import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceAway12FilledIcon],svg[fluent-presence-away-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m.5-8.75v2.405l1.488 1.276a.75.75 0 1 1-.976 1.138l-1.75-1.5A.75.75 0 0 1 5 6V3.25a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentPresenceAway12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
