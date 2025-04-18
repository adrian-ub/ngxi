import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngleDoubleUpIcon],svg[lineicons-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.048 18.405a.75.75 0 0 0 1.06-1.06l-6.25-6.25a.75.75 0 0 0-1.06 0l-6.25 6.25a.75.75 0 1 0 1.06 1.06l5.72-5.72z"></svg:path><svg:path fill="currentColor" d="M18.048 13.905a.75.75 0 0 0 1.06-1.06l-6.25-6.25a.75.75 0 0 0-1.06 0l-6.25 6.25a.75.75 0 1 0 1.06 1.06l5.72-5.72z"></svg:path>`,
})
export class LineiconsAngleDoubleUpIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
