import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareArrowForward48FilledIcon],svg[fluent-square-arrow-forward-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h12.794A12.94 12.94 0 0 1 22 35c0-7.18 5.82-13 13-13c2.577 0 4.98.75 7 2.044V11.25C42 8.35 39.65 6 36.75 6zM24 35c0 6.075 4.925 11 11 11s11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11m14.293-3.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L39.586 35H34a4 4 0 0 0-4 4a1 1 0 1 1-2 0a6 6 0 0 1 6-6h5.586z"></svg:path>`,
})
export class FluentSquareArrowForward48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
