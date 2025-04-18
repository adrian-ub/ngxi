import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHourglassOneQuarter20FilledIcon],svg[fluent-hourglass-one-quarter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.68 14q-.212.28-.36.6A3.4 3.4 0 0 0 6 16h8a3.5 3.5 0 0 0-.31-1.4a3.4 3.4 0 0 0-.367-.6z"></svg:path>`,
})
export class FluentHourglassOneQuarter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
