import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHourglassHalf24FilledIcon],svg[fluent-hourglass-half-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 19.5h10.5a.25.25 0 0 0 .25-.25v-.6A3.24 3.24 0 0 0 16.08 16L14 14.52A3.22 3.22 0 0 1 12.56 12h-1.12A3.22 3.22 0 0 1 10 14.52L7.92 16a3.24 3.24 0 0 0-1.42 2.65v.6a.25.25 0 0 0 .25.25"></svg:path>`,
})
export class FluentHourglassHalf24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
