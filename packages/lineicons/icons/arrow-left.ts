import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowLeftIcon],svg[lineicons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.578 12.498c0 .193.073.385.22.532l5.996 6a.75.75 0 0 0 1.06-1.06l-4.72-4.724H20.33a.75.75 0 0 0 0-1.5H6.141l4.713-4.716a.75.75 0 1 0-1.061-1.06l-5.95 5.953a.75.75 0 0 0-.266.573z"></svg:path>`,
})
export class LineiconsArrowLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
