import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCurveDownLeft16FilledIcon],svg[fluent-arrow-curve-down-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.151 1.378a.75.75 0 0 1-.279 1.023C8.458 3.781 8.25 6.03 8.25 8.001v4.438l2.22-2.22a.75.75 0 1 1 1.06 1.061l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V8c0-2.029.192-5.08 3.378-6.901a.75.75 0 0 1 1.023.279"></svg:path>`,
})
export class FluentArrowCurveDownLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
