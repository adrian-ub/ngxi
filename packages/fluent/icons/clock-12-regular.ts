import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock12RegularIcon],svg[fluent-clock-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1m0 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.5 1.5a.5.5 0 0 1 .492.41L6 4v2h1.5a.5.5 0 0 1 .09.992L7.5 7h-2a.5.5 0 0 1-.492-.41L5 6.5V4a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentClock12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
