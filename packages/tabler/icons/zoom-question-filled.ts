import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomQuestionFilledIcon],svg[tabler-zoom-question-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M10 12a1 1 0 0 0-.993.883L9 13.01a1 1 0 0 0 1.993.117L11 13a1 1 0 0 0-1-1M8.1 6.877a1 1 0 0 0 1.433 1.389l.088-.09A.5.5 0 1 1 10 9a1 1 0 0 0-.002 2a2.5 2.5 0 1 0-1.9-4.123"></svg:path>`,
})
export class TablerZoomQuestionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
