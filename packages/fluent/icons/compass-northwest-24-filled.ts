import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompassNorthwest24FilledIcon],svg[fluent-compass-northwest-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.458-12.614a4 4 0 0 1 2.196 2.14l1.854 4.325a.5.5 0 0 1-.657.657l-4.325-1.854a4 4 0 0 1-2.14-2.196L7.78 8.43a.5.5 0 0 1 .65-.65z"></svg:path>`,
})
export class FluentCompassNorthwest24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
