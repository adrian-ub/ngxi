import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomOut16RegularIcon],svg[fluent-zoom-out-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 5a4.48 4.48 0 0 0 2.809-.984l3.837 3.838a.5.5 0 0 0 .708-.708L10.016 9.31A4.5 4.5 0 1 0 6.5 11m0-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7"></svg:path>`,
})
export class FluentZoomOut16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
