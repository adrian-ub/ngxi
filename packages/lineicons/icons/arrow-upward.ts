import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowUpwardIcon],svg[lineicons-arrow-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.755 4.013a.75.75 0 0 1 .57-.263h.001c.193 0 .385.073.532.22l6 5.995a.75.75 0 0 1-1.06 1.062l-4.723-4.72V20.5a.75.75 0 0 1-1.5 0V6.313l-4.717 4.714a.75.75 0 0 1-1.06-1.062z"></svg:path>`,
})
export class LineiconsArrowUpwardIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
