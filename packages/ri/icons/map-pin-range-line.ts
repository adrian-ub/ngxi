import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPinRangeLineIcon],svg[ri-map-pin-range-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488c0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488zM12 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiMapPinRangeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
