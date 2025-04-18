import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPersonClock24FilledIcon],svg[fluent-video-person-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.745 3a2.25 2.25 0 0 1 2.25 2.25v7.555a6.5 6.5 0 0 0-1.5-1.075V5.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 14.75a1.75 1.75 0 0 1 1.606-1.744L8.75 13h4.06A6.48 6.48 0 0 0 11 17.5q.001.779.175 1.505H4.25A2.25 2.25 0 0 1 2 16.755V5.25A2.25 2.25 0 0 1 4.25 3zM12 6a3 3 0 1 1 0 6a3 3 0 0 1 0-6m11 11.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentVideoPersonClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
