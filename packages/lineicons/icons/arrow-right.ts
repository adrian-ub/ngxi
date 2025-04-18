import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowRightIcon],svg[lineicons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.08 12.519a.75.75 0 0 1-.22.51l-5.996 6.001a.75.75 0 0 1-1.061-1.06l4.72-4.724H4.328a.75.75 0 0 1 0-1.5h14.188L13.803 7.03a.75.75 0 1 1 1.06-1.06l5.95 5.953a.75.75 0 0 1 .266.596"></svg:path>`,
})
export class LineiconsArrowRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
