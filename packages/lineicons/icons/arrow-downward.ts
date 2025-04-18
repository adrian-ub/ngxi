import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowDownwardIcon],svg[lineicons-arrow-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.755 20.989a.75.75 0 0 0 .57.262h.001a.75.75 0 0 0 .532-.22l6-5.995a.75.75 0 0 0-1.06-1.061l-4.723 4.72V4.5a.75.75 0 0 0-1.5 0v14.188l-4.717-4.713a.75.75 0 1 0-1.06 1.06z"></svg:path>`,
})
export class LineiconsArrowDownwardIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
