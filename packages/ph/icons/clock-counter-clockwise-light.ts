import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClockCounterClockwiseLightIcon],svg[ph-clock-counter-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 80v44.6l37.09 22.25a6 6 0 0 1-6.18 10.3l-40-24A6 6 0 0 1 122 128V80a6 6 0 0 1 12 0m-6-46a93.4 93.4 0 0 0-66.49 27.56c-8.58 8.68-16 17-23.51 25.8V64a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12H44.73C52.86 88.29 60.79 79.35 70 70a82 82 0 1 1 1.7 117.62a6 6 0 1 0-8.24 8.72A94 94 0 1 0 128 34"></svg:path>`,
})
export class PhClockCounterClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
