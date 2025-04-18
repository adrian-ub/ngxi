import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarShield28RegularIcon],svg[fluent-calendar-shield-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v8.906c-.501-.228-.993-.577-1.484-1.069l-.016-.016V9.503h-19V21.75c0 .966.784 1.75 1.75 1.75h9.834q.28.793.73 1.5H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm1.75 13.023q.72.493 1.5.736q.77.241 1.6.241a.5.5 0 0 1 .5.5v3.001c0 3.219-1.642 5.406-4.842 6.473a.5.5 0 0 1-.316 0C18.74 25.907 17.1 23.72 17.1 20.501V17.5a.5.5 0 0 1 .5-.5c1.529 0 2.904-.611 4.147-1.854a.5.5 0 0 1 .707 0q.508.51 1.046.877M21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75"></svg:path>`,
})
export class FluentCalendarShield28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
