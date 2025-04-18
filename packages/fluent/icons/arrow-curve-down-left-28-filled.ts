import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCurveDownLeft28FilledIcon],svg[fluent-arrow-curve-down-left-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.868 3.504a1 1 0 0 1-.372 1.364C15.138 7.36 15 11.476 15 15v7.086l4.293-4.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L13 22.086V15c0-3.475.063-8.759 5.504-11.868a1 1 0 0 1 1.364.372"></svg:path>`,
})
export class FluentArrowCurveDownLeft28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
