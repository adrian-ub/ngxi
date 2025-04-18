import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngleDoubleRightIcon],svg[lineicons-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.423 18.22a.75.75 0 1 0 1.06 1.06l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 0 0-1.06 1.06l5.72 5.72z"></svg:path><svg:path fill="currentColor" d="M10.923 18.22a.75.75 0 1 0 1.06 1.06l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 0 0-1.06 1.06l5.72 5.72z"></svg:path>`,
})
export class LineiconsAngleDoubleRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
