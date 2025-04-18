import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceAway16RegularIcon],svg[fluent-presence-away-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 7.52V4.5a1 1 0 1 0-2 0V8a1 1 0 0 0 .375.78l2.5 2a1 1 0 1 0 1.25-1.56zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"></svg:path>`,
})
export class FluentPresenceAway16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
