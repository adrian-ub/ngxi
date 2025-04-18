import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleLightIcon],svg[ph-skip-back-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m34.91-135.25a6 6 0 0 0-6.09.16L102 117.17V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0v-29.17l54.82 34.26A6 6 0 0 0 166 168V88a6 6 0 0 0-3.09-5.25M154 157.17L107.32 128L154 98.83Z"></svg:path>`,
})
export class PhSkipBackCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
