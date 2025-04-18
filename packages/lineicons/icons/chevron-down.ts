import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronDownIcon],svg[lineicons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.548 9.095a.75.75 0 0 1 1.06 0l5.72 5.72l5.72-5.72a.75.75 0 0 1 1.06 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class LineiconsChevronDownIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
