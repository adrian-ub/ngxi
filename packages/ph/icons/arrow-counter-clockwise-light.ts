import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCounterClockwiseLightIcon],svg[ph-arrow-counter-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a94 94 0 0 1-92.74 94H128a93.43 93.43 0 0 1-64.5-25.65a6 6 0 1 1 8.24-8.72A82 82 0 1 0 70 70l-.19.19L39.44 98H72a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6V56a6 6 0 0 1 12 0v34.34L61.63 61.4A94 94 0 0 1 222 128"></svg:path>`,
})
export class PhArrowCounterClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
