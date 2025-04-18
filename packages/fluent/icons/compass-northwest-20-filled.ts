import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompassNorthwest20FilledIcon],svg[fluent-compass-northwest-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m.51-10.127a3 3 0 0 1 1.647 1.605l1.6 3.731a.417.417 0 0 1-.548.548l-3.731-1.6a3 3 0 0 1-1.606-1.647L6.484 7.025a.417.417 0 0 1 .54-.541z"></svg:path>`,
})
export class FluentCompassNorthwest20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
