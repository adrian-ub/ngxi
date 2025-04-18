import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHourglassHalf20FilledIcon],svg[fluent-hourglass-half-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.94 10c.001.367-.08.73-.24 1.06a2.5 2.5 0 0 1-.66.86l-1.82 1.52a3.25 3.25 0 0 0-.9 1.16A3.4 3.4 0 0 0 6 16h8a3.5 3.5 0 0 0-.31-1.4a3.4 3.4 0 0 0-.91-1.16L11 11.91a2.45 2.45 0 0 1-.65-.85a2.4 2.4 0 0 1-.29-1.06z"></svg:path>`,
})
export class FluentHourglassHalf20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
