import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronLeftIcon],svg[lineicons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.234 5.22a.75.75 0 0 1 0 1.06L9.514 12l5.72 5.72a.75.75 0 0 1-1.061 1.06l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class LineiconsChevronLeftIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
