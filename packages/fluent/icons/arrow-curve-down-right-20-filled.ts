import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCurveDownRight20FilledIcon],svg[fluent-arrow-curve-down-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.614 3.143a.75.75 0 1 1 .772-1.286c1.347.808 2.34 1.785 2.98 3.135c.63 1.33.884 2.955.884 5.008v5.44l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V10c0-1.947-.245-3.321-.74-4.366c-.486-1.026-1.243-1.799-2.396-2.49"></svg:path>`,
})
export class FluentArrowCurveDownRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
