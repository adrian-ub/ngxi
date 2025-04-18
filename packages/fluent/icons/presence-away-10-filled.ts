import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceAway10FilledIcon],svg[fluent-presence-away-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10m0-6.996v1.79l1.354 1.353a.5.5 0 1 1-.708.707l-1.5-1.5A.5.5 0 0 1 4 5V3.004a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentPresenceAway10FilledIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
