import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle848FilledIcon],svg[fluent-number-circle-8-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-20-8.5c-1.997 0-3.5 1.518-3.5 3.25S22.003 22 24 22s3.5-1.518 3.5-3.25s-1.503-3.25-3.5-3.25m3.91 7.61c1.272-1.044 2.09-2.594 2.09-4.36c0-3.238-2.75-5.75-6-5.75s-6 2.512-6 5.75c0 1.766.818 3.316 2.09 4.36c-1.843 1.15-3.09 3.1-3.09 5.39c0 3.694 3.244 6.5 7 6.5s7-2.806 7-6.5c0-2.29-1.247-4.24-3.09-5.39M24 24.5c-2.595 0-4.5 1.895-4.5 4s1.905 4 4.5 4s4.5-1.895 4.5-4s-1.905-4-4.5-4"></svg:path>`,
})
export class FluentNumberCircle848FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
