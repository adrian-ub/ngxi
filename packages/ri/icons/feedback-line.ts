import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFeedbackLineIcon],svg[ri-feedback-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zM11 13h2v2h-2zm0-6h2v5h-2z"></svg:path>`,
})
export class RiFeedbackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
