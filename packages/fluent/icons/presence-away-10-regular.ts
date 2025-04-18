import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceAway10RegularIcon],svg[fluent-presence-away-10-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.793V3.004a.5.5 0 0 0-1 0V5a.5.5 0 0 0 .146.354l1.5 1.5a.5.5 0 1 0 .708-.707zM10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0M9 5a4 4 0 1 0-8 0a4 4 0 0 0 8 0"></svg:path>`,
})
export class FluentPresenceAway10RegularIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
